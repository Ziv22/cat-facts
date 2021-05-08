const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const factSchema = new Schema({
  _id: String,
  text: String,
  added: Boolean,
});

const Fact = mongoose.model("Fact", factSchema);

module.exports = Fact;
