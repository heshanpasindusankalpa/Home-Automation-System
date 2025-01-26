const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  sensor_id: { type: String, required: true },
  temperature_in_c: { type: Number, required: true },
  temperature_in_f: { type: Number, required: true },
  humidity: { type: Number, required: true },
  heat_index_in_c: { type: Number, required: true },
  heat_index_in_f: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sensor', sensorSchema);
