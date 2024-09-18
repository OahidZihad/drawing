const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.post("/drawing", doctorController.createDrawing);

// Get all drawings
router.get("/drawings", doctorController.getAllDrawings);

// Get a specific drawing by ID
router.get("/drawing/:id", doctorController.getDrawingById);

// Update a drawing
router.put("/drawing/:id", doctorController.updateDrawing);

// Delete a drawing
router.delete("/drawing/:id", doctorController.deleteDrawing);

module.exports = router;
