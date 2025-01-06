const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  lightIntensity: { type: Number, required: true },
  humidity: { type: Number, required: true },
  temperature: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SensorData', sensorDataSchema);
