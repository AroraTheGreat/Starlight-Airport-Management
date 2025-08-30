const db = require("../config/db");

const Flight = {
  // Get all flights
  getAll: (callback) => {
    db.query("SELECT * FROM flights", callback);
  },

  // Create a new flight
  create: (data, callback) => {
    db.query(
      "INSERT INTO flights (flight_no, destination, departure_time) VALUES (?, ?, ?)",
      [data.flight_no, data.destination, data.departure_time],
      callback
    );
  },
};

module.exports = Flight;
