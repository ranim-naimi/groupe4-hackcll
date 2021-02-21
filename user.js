const mongoose = require("mongoose");

const User = mongoose.model("user", {
   name: {
      type: String,
      required: true,
   },
   lastname: {
      type: String,
      required: true,
   },
   number: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },
   role: {
      type: String,
      default: "member",
   },
   key: {
      type: Boolean,
      default: false,
   },
});

module.exports = User;
