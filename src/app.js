const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandler");

// Routes
const drawingRoutes = require("./routes/drawingRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Routes
app.use("/api", drawingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  if (err) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  });
});

module.exports = app;
