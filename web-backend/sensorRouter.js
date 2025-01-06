const express = require('express');
const sensorController = require('./sensorController');
const router = express.Router();

router.get('/sensor-data', sensorController.getSensorData);
router.post('/add-sensor-data', sensorController.addSensorData);

module.exports = router;
