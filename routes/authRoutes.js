const express = require("express");
const { registerUser, loginUser } = require("../controllers/authControllers");

const router = express.Router();

// Register Route
router.post("/registerr", registerUser);

// Login Route
router.post("/loginn", loginUser);

module.exports = router;
