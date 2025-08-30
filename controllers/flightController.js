const Flight = require("../models/flightModel");

// Get all flights
exports.getAllFlights = (req, res) => {
  Flight.getAll((err, flights) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
    } else {
      res.render("flights/list", { flights });
    }
  });
};

// Add a new flight
exports.addFlight = (req, res) => {
  const { flight_no, destination, departure_time } = req.body;

  Flight.create({ flight_no, destination, departure_time }, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
    } else {
      res.redirect("/flights");
    }
  });
};
