const mongoose = require("mongoose");

const Bill = mongoose.model("bill", {
   date: {
      type: String,
      required: true,
   },
   sum: {
      type: Number,
      required: true,
   },
   type: {
      type: String,
      required: true,
   },
   sd: {
      type: String,
      default: true,
   },
});

module.exports = Bill;
