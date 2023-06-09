const express = require("express");
const Task = require("../models/taskmodel");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const router = express.Router();

router.route("/").post(createTask).get(getTasks)
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);


// Neater method
// router.post("/", createTask);
// router.get("/", getTasks);
// router.get("/:id", getTask);
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);

module.exports = router;
