const Drawing = require("../models/Doctor");

exports.createDrawing = async (req, res, next) => {
  try {
    const drawing = new Drawing(req.body);
    const savedDrawing = await drawing.save();
    res.status(201).json(savedDrawing);
  } catch (error) {
    next(error);
  }
};

// Get all drawings
exports.getAllDrawings = async (req, res, next) => {
  console.log("🚀 ~ exports.getAllDrawings= ~ req, res, next:", req, res, next)
  try {
    const drawings = await Drawing.find();
    console.log("🚀 ~ exports.getAllDrawings= ~ drawings:", drawings)
    res.json(drawings);
  } catch (error) {
    console.log("🚀 ~ exports.getAllDrawings= ~ error:", error)
    next(error);
  }
};

// Get a specific drawing by ID
exports.getDrawingById = async (req, res, next) => {
  try {
    const drawing = await Drawing.findById(req.params.id);
    if (!drawing) {
      return res.status(404).json({ message: "Drawing not found" });
    }
    res.json(drawing);
  } catch (error) {
    next(error);
  }
};

// Update a drawing
exports.updateDrawing = async (req, res, next) => {
  try {
    const updatedDrawing = await Drawing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedDrawing) {
      return res.status(404).json({ message: "Drawing not found" });
    }
    res.json(updatedDrawing);
  } catch (error) {
    next(error);
  }
};

// Delete a drawing
exports.deleteDrawing = async (req, res, next) => {
  try {
    const drawing = await Drawing.findByIdAndDelete(req.params.id);
    if (!drawing) {
      return res.status(404).json({ message: "Drawing not found" });
    }
    res.json({ message: "Deleted Drawing" });
  } catch (error) {
    next(error);
  }
};
