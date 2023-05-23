const Task = require("../models/taskmodel");

//Create a Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Get all tasks
const getTasks = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Get a single Task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No Task with id: ${id} found`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No Task with id: ${id} found`);
    }
    res.status(200).send("task deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({_id: id},req.body,{new: true, runValidators: true});
    if (!task) {
        return res.status(404).json(`No Task with id: ${id} found`);
      }
      res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
