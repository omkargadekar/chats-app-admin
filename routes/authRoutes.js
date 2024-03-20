const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
} = require("../controllers/authControllers");

const router = express.Router();

// Register Route
router.post("/registerr", registerUser);

// Login Route
router.post("/loginn", loginUser);

router.post("/users", getAllUsers);

module.exports = router;
