const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Line Schema
const LineSchema = new Schema({
  type: {
    type: String,
    enum: ['line'],
    required: true
  },
  start: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  end: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  color: { type: String, default: '#000000' },
  thickness: { type: Number, default: 2 }
});

// Shape Schema
const ShapeSchema = new Schema({
  type: {
    type: String,
    enum: ['rectangle', 'circle', 'ellipse', 'triangle'],
    required: true
  },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  dimensions: {
    width: { type: Number, required: function() { return this.type !== 'circle'; } },
    height: { type: Number, required: function() { return this.type !== 'circle'; } },
    radius: { type: Number, required: function() { return this.type === 'circle'; } }
  },
  color: { type: String, default: '#000000' },
  filled: { type: Boolean, default: false }
});

// Text Annotation Schema
const TextSchema = new Schema({
  type: {
    type: String,
    enum: ['text'],
    required: true
  },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  content: { type: String, required: true },
  font: {
    family: { type: String, default: 'Arial' },
    size: { type: Number, default: 14 },
    color: { type: String, default: '#000000' }
  }
});

// Main Drawing Schema
const DrawingSchema = new Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  elements: {
    lines: [LineSchema],
    shapes: [ShapeSchema],
    texts: [TextSchema]
  },
  backgroundColor: { type: String, default: '#FFFFFF' }
});

module.exports = mongoose.model('Drawing', DrawingSchema);
