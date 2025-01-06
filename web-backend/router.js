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
const sensorRouter = require('./sensorRouter');

const router = express.Router();

router.get('/components', componentController.getComponents);
router.post('/addcomponent', componentController.addComponent);
router.put('/updatecomponent', componentController.updateComponent);
router.delete('/deletecomponent', componentController.deleteComponent);

// Sensor data routes
router.use(sensorRouter);

module.exports = router;
