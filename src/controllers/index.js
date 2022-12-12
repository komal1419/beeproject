const { response } = require("express");
const { Todo } = require("../models/models");



const getTodo = async (request, response) => {
  var todoId = request.query.id;
  if (todoId) {
    try {
      var allTodo = await Todo.findById(todoId);
    } catch {
      allTodo = null;
    }
  } else {
    var allTodo = await Todo.find();   //allTodo
  }

  return response.json(allTodo);
};

const createNewTodo = async (request, response) => {    //Todo
  const todo=new Todo(request.body);
  await todo.save();
  return response.json({ data: "Student Created" });
};

const updateTodo = async (request, response) => {
  var todoId = request.query.id;
  try {
    var todo = await Todo.findById(todoId);
    if (!todo) {
      return response
        .status(404)
        .json({ status: "Error", msg: "Id does not exist" });
    }
  } catch {
    return response
      .status(404)
      .json({ status: "Error", msg: "Id does not exist" });
  }

  await Todo.findByIdAndUpdate(todoId, request.body);
  return response.json({ data: "Student Updated" });
};

const deleteTodo = async (request, response) => {
  var todoId = request.query.id;
  await Todo.findByIdAndDelete(todoId);
  return response.json({ data: "Student Deleted" });
};

module.exports = {
  createNewTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};