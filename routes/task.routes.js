const express = require("express");

const {
  seedTasksDatabase,
  readAllTasks,
  createNewTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

const taskRouter = express.Router();

// read all tasks
taskRouter.get("/", async (req, res) => {
  try {
    const tasks = await readAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch all tasks", error });
  }
});

// create a task
taskRouter.post("/", async (req, res) => {
  try {
    const task = await createNewTask(req.body);
    if (task) {
      res
        .status(201)
        .json({ message: "New task created successfully", data: task });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to create new task", error });
  }
});

// update a task
taskRouter.post("/:taskId", async (req, res) => {
  try {
    const updatedTask = await updateTask(req.params.taskId, req.body);
    if (updatedTask) {
      res
        .status(200)
        .json({ message: "Task updated successfully", data: updatedTask });
    } else {
      res.status(404).json({ error: "No task found for specified id" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update a task", error });
  }
});

// delete a task
taskRouter.delete("/:taskId", async (req, res) => {
  try {
    const deletedTask = await deleteTask(req.params.taskId);
    if (deletedTask) {
      res
        .status(200)
        .json({ message: "Task deleted successfully", data: deletedTask });
    } else {
      res.status(404).json({ error: "No task found for specified id" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete a task", error });
  }
});

module.exports = taskRouter;
