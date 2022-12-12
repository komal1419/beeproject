const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const Todo = mongoose.model("Student", todoSchema);
module.exports = { Todo };