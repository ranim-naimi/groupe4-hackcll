const mongoose = require("mongoose");

const Material = mongoose.model("material", {
   name: {
      type: String,
      required: true,
   },
   borrowdate: {
      type: String,
      default: null,
   },
   returndate: {
      type: String,
      default: null,
   },
   avaible: {
      type: Boolean,
      default: true,
   },
   membername: {
      type: String,
      default: null,
   },
   memberlastname: {
      type: String,
      default: null,
   },
});

module.exports = Material;
