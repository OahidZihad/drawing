exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({ message: messages.join(", ") });
  }

  // Mongoose Cast Error (e.g., invalid ObjectId)
  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  // Default to 500 Server Error
  res.status(500).json({
    message: "Server Error",
    error: err.message,
  });
};
