const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as template engine
app.set("view engine", "ejs");

// Import Routes
const flightRoutes = require("./routes/flights");

// Use Routes
app.use("/flights", flightRoutes);

// Home Route
app.get("/", (req, res) => {
  res.render("index", { title: "Starlight Airport Management System" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
