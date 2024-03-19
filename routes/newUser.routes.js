const express = require("express");
const {
  registerUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/newUser.controller.js");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Auth routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// User CRUD routes
router.route("/all-users").get(protect, getAllUsers);

router.route("/:id").get(protect, getSingleUser);

router.route("/:id").put(protect, updateUser);

router.route("/:id").delete(protect, deleteUser);

module.exports = router;
