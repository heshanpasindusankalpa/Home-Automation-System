/*const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/components', controller.getComponents);
router.post('/addcomponent', controller.addComponent);
router.put('/updatecomponent', controller.updateComponent);
router.delete('/deletecomponent', controller.deleteComponent);

module.exports = router;*/
const express = require('express');
const componentController = require('./controller');


const sensorController = require('./sensorController');


const router = express.Router();

router.get('/components', componentController.getComponents);
router.post('/addcomponent', componentController.addComponent);
router.put('/updatecomponent', componentController.updateComponent);
router.delete('/deletecomponent', componentController.deleteComponent);

exports.getComponentStates = async (req, res) => {
    try {
      const components = await Component.find({}, 'name status -_id'); // Fetch only necessary fields
      const response = components.reduce((acc, component) => {
        acc[component.name] = component.status; // Example: { led1: "on", bulb: "off" }
        return acc;
      }, {});
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching component states' });
    }
  };
  

// Sensor data routes
router.post('/sensors', sensorController.saveSensorRecord);

module.exports = router;