const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Main Drawing Schema
const DrawingSchema = new Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  elements: {
    serialized: { type: Object },
  },
  backgroundColor: { type: String, default: "#FFFFFF" },
});

module.exports = mongoose.model("Drawing", DrawingSchema);
