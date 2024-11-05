// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const educatorRoutes = require("./routes/educatorRoutes");
const cors = require("cors");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Connect to Database
//connectDB();

// Use educator routes
app.use("/api", educatorRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
