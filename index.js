const server = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// ToDo: Database Connection
mongoose.connect("mongodb://localhost:27017/mern_g4");
mongoose.connection.on("connected", () => {
  console.log("DB CONNECTED");
});

// Data Connection End

const {
  getTodo,
  createNewTodo,
  updateTodo,
  deleteTodo,
} = require("./src/controllers/index");
const app = server();

app.use(cors());
app.use(bodyParser.json());

app.get("/todo", getTodo);
app.post("/create-new-todo", createNewTodo);
app.put("/update-todo", updateTodo);
app.delete("/delete-todo", deleteTodo);

app.listen(4000, () => {
  console.log("Sever Started on port 4000");
});