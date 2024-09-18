const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.post("/drawings", doctorController.createDrawing);

// Get all drawings
router.get("/drawings", doctorController.getAllDrawings);

// Get a specific drawing by ID
router.get("/:id", doctorController.getDrawingById);

// Update a drawing
router.put("/:id", doctorController.updateDrawing);

// Delete a drawing
router.delete("/:id", doctorController.deleteDrawing);

module.exports = router;
