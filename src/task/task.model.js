const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String },
  status: { type: String },
  project: { type: String },
  assignee: { type: String },
  start_date: { type: String },
  due_date: { type: String },
  description: { type: String },
  estimate: { type: String },
  tag: { type: String },
  activity: [
    {
      id: { type: Date, default: Date.now() },
      by: { type: String },
      message: { type: String },
      date_time: { type: Date, default: new Date().toLocaleString() },
    },
  ],
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;
