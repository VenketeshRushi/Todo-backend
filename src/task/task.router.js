const express = require("express");
const taskModel = require("./task.model");

const app = express.Router();

app.post("/addTask", async (req, res) => {
  try {
    let newTask = await taskModel.create(req.body);
    return res.send(newTask);
  } catch (error) {
    return res.send(error.message);
  }
});

app.patch("/updateTask/:id", async (req, res) => {
  let task = req.body;
  let id = req.params.id;
  try {
    let updatedTask = await taskModel.findByIdAndUpdate(id, task, { new: true });
    return res.send(updatedTask);
  } catch (error) {
    return res.send(error.message);
  }
});

app.delete("/deleteTask/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let deleteTask = await taskModel.findByIdAndDelete(id);
    return res.send(deleteTask);
  } catch (error) {
    return res.send(error.message);
  }
});

app.get("/getTask", async (req, res) => {
  try {
    let tasks = await taskModel.find();
    return res.send(tasks);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = app;
