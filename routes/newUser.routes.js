const express = require("express");
const {
  registerUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/newUser.controller.js");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Auth routes
router.route("/register").post(protect, registerUser);

// User CRUD routes
router.route("/all-users").get(protect, getAllUsers);

router.route("/:id").get(protect, getSingleUser);

router.route("/:id").put(protect, updateUser);

router.route("/:id").delete(protect, deleteUser);

module.exports = router;
