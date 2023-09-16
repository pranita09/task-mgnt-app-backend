const mongoose = require("mongoose");
const fs = require("fs");

const Task = require("../models/task.model");

const jsonData = fs.readFileSync("./data/task.json");
const tasks = JSON.parse(jsonData);

// seed database
async function seedTasksDatabase() {
  try {
    for (const task of tasks) {
      const {
        name,
        assignee,
        summary,
        effortSpent,
        endDate,
        startDate,
        priority,
        status,
        taskType,
      } = task;
      const newTask = new Task({
        name,
        assignee,
        summary,
        effortSpent,
        endDate,
        startDate,
        priority,
        status,
        taskType,
      });
      await newTask.save();
      console.log(`New task ${name} added`);
    }
    console.log("Tasks data seeded successfully");
  } catch (error) {
    console.error("Error seeding database", error);
  } finally {
    mongoose.disconnect();
  }
}

// read all tasks
async function readAllTasks() {
  try {
    const tasks = await Task.find({});
    console.log("All tasks: ", tasks);
    return tasks;
  } catch (error) {
    console.error("Error while reading tasks", error);
  }
}

// create a task
async function createNewTask(task) {
  try {
    const newTask = new Task(task);
    const savedTask = await newTask.save();
    console.log("New task added", savedTask);
    return savedTask;
  } catch (error) {
    console.error("Error while creating a task", error);
  }
}

// update a task
async function updateTask(taskId, updatedData) {
  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId, updatedData, {
      new: true,
    });
    if (updatedTask) {
      console.log("Updated task: ", updatedTask);
      return updatedTask;
    } else {
      console.log("Task not found");
    }
  } catch (error) {
    console.error("Error while updating a task", error);
  }
}

// delete a task
async function deleteTask(taskId) {
  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (deletedTask) {
      console.log("Task deleted successfully", deletedTask);
      return deletedTask;
    } else {
      console.log("Task not found");
    }
  } catch (error) {
    console.error("Error deleting a task", error);
  }
}

module.exports = {
  seedTasksDatabase,
  readAllTasks,
  createNewTask,
  updateTask,
  deleteTask,
};
