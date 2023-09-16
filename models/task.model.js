const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    assignee: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
    startDate: String,
    endDate: String,
    effortSpent: Number,
    priority: {
      type: String,
      required: true,
      enum: ["High", "Medium", "Low"],
    },
    status: {
      type: String,
      default: "Ready",
      enum: ["Ready", "In Progress", "Testing", "Done"],
      required: true,
    },
    taskType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
