const express = require("express");
const router = express.Router();
const drawingController = require("../controllers/drawingController");

router.post("/drawing", drawingController.createDrawing);

// Get all drawings
router.get("/drawings", drawingController.getAllDrawings);

// Get a specific drawing by ID
router.get("/drawing/:id", drawingController.getDrawingById);

// Update a drawing
router.put("/drawing/:id", drawingController.updateDrawing);

// Delete a drawing
router.delete("/drawing/:id", drawingController.deleteDrawing);

module.exports = router;
