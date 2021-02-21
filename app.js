const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("./models/user");
const Material = require("./models/material");
const Bill = require("./models/bill");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

//connect to data base
mongoose.connect("mongodb://localhost:27017/cll", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: true,
});

//signup
app.post("/users/signup", (req, res) => {
   let data = req.body;
   let user = new User({
      name: data.name,
      lastname: data.lastname,
      number: data.number,
      email: data.email,
      password: bcrypt.hashSync(data.password, bcrypt.genSaltSync(10)),
   });
   console.log(user);
   user
      .save()
      .then(() => res.status(201).send({ message: "user saved" }))
      .catch((e) => res.status(400).send(e));
});

//login
app.post("/users/signin", (req, res) => {
   User.findOne({ email: req.body.email })
      .then((myuser) => {
         if (myuser) {
            let compare = bcrypt.compareSync(
               req.body.password,
               myuser.password
            );
            if (compare) {
               let id = myuser._id;
               let name = myuser.name;
               let role = myuser.role;
               let userdata = [id, name, role];
               res.status(200).send({ userdata });
            } else {
               res.status(404).send({ message: "incorrect password" });
            }
         } else {
            res.status(404).send({ message: "user not found" });
         }
      })
      .catch((e) => res.status(400).send(e));
});

app.delete("/users/delete/:id", (req, res) => {
   let userId = req.params.id;
   User.findOneAndDelete({ _id: userId })
      .then((myuser) => {
         if (myuser) {
            res.status(200).send({ message: "user deleted" });
         } else {
            res.status(404).send({ message: "user not found" });
         }
      })
      .catch((e) => res.status(400).send(e));
});

app.get("/users/getallmembers", (req, res) => {
   User.find()
      .then((users) => res.status(200).send({ users }))
      .catch((e) => res.status(400).send(e));
});

app.patch("/users/patch/:id", (req, res) => {
   let userId = req.params.id;
   User.findOneAndUpdate({ _id: userId }, req.body)
      .then((myuser) => {
         if (myuser) {
            res.status(200).send({ message: "user updated" });
         } else {
            res.status(404).send({ message: "user not found" });
         }
      })
      .catch((e) => res.status(400).send(e));
});

app.get("/keys/getallkeys", (req, res) => {
   User.find()
      .then((users) => res.status(200).send({ users }))
      .catch((e) => res.status(400).send(e));
});

app.post("/materials/addmaterial", (req, res) => {
   let data = req.body;
   let material = new Material({
      name: data.name,
   });
   console.log(material);
   material
      .save()
      .then(() => res.status(201).send({ message: "material saved" }))
      .catch((e) => res.status(400).send(e));
});

app.post("/bills/addbill", (req, res) => {
   let data = req.body;
   let bill = new Bill({
      sd: data.sd,
      date: data.date,
      sum: data.sum,
      type: data.type,
   });
   console.log(bill);
   bill
      .save()
      .then(() => res.status(201).send({ message: "bill saved" }))
      .catch((e) => res.status(400).send(e));
});

app.get("/hello", (req, res) => {
   res.status(200).send("hello");
});

app.listen(port, () => {
   console.log("server started");
});
