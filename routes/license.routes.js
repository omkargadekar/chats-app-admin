const express = require("express");
const {
  createLicense,
  getAllLicenses,
  getSingleLicense,
} = require("../controllers/license.controller.js");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/add-license").post(protect, createLicense);

router.route("/:id").get(protect, getAllLicenses);

router.route("/:id").get(protect, getSingleLicense);

module.exports = router;
