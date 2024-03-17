const express = require("express");
const {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} = require("../controllers/task.controller.js");
const { protect } = require("../middleware/authMiddleware");
const { upload } = require("../middleware/multer.middleware");

const router = express.Router();

router.route("/create-task").post(
  protect,
  upload.single("image"), //  task images should be uploaded with the form field name 'image'.
  createTask
);
router.route("/all-tasks").get(protect, getAllTasks);
router.route("/delete-task/:taskId").delete(protect, deleteTask);
router
  .route("/update-task/:taskId")
  .put(protect, upload.single("image"), updateTask);

module.exports = router;
