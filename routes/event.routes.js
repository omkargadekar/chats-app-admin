const express = require("express");
const {
  getAllEvents,
  getSingleEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event.controller.js");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/create-event").post(protect, createEvent);

router.route("/all-events").get(protect, getAllEvents);

router.route("/:id/show").get(protect, getSingleEvent);

router.route("/:id/update").put(protect, updateEvent);

router.route("/:id/delete").delete(protect, deleteEvent);

module.exports = router;
