const Sensor = require('./sensorModel');  // New model for sensor data

exports.saveSensorRecord = async (req, res) => {
  try {
    const { sensor_id, temperature_in_c, temperature_in_f, humidity, heat_index_in_c, heat_index_in_f } = req.body;
    
    // Use the correct model name `Sensor` here
   // const newSensorData = new Sensor({
    //  sensor_id,
    //  temperature_in_c,
   //   temperature_in_f,
   //   humidity,
    //  heat_index_in_c,
   //   heat_index_in_f,
   //   timestamp: new Date()
  //  });

  //  await newSensorData.save();  
    
    // Save the new record to the database
    const newSensorData = new Sensor({
        sensor_id: '12345',
        temperature_in_c: 25.5,
        temperature_in_f: 77.9,
        humidity: 60,
        heat_index_in_c: 26.5,
        heat_index_in_f: 79.7
      });
      
      await newSensorData.save(); 

    res.status(201).json({ message: 'Sensor data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving sensor data' });
  }
};
