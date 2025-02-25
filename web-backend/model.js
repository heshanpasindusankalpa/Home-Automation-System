const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true }, // e.g., fan, light, etc.
  place: { type: String, required: true }, // Added for 'place'
  status: { type: String, required: true, default: 'off' }, // e.g., on/off
});

module.exports = mongoose.model('Component', componentSchema);
