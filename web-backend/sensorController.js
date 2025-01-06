const SensorData = require('./sensorDataModel');

exports.getSensorData = async (req, res) => {
  try {
    const data = await SensorData.find().sort({ timestamp: -1 }).limit(10); // Latest 10 entries
    res.status(200).json({ response: data });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching sensor data' });
  }
};

exports.addSensorData = async (req, res) => {
  try {
    const { lightIntensity, humidity, temperature } = req.body;
    const newSensorData = new SensorData({ lightIntensity, humidity, temperature });
    await newSensorData.save();
    res.status(201).json({ message: 'Sensor data added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding sensor data' });
  }
};
