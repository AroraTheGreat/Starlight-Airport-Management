const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flightController");

// Get all flights
router.get("/", flightController.getAllFlights);

// Add new flight
router.post("/add", flightController.addFlight);

module.exports = router;
