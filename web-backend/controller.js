const Component = require('./model');

// Get All Components
exports.getComponents = async (req, res) => {
  try {
    const components = await Component.find();
    res.status(200).json({ response: components });
  } catch (error) {
    console.error('Error fetching components:', error);
    res.status(500).json({ error: 'Error fetching components', details: error.message });
  }
};

// Add New Component
exports.addComponent = async (req, res) => {
  try {
    const { id, name, type, place, status } = req.body;

    // Check for missing required fields
    if (!id || !name || !type || !place || !status) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if the component already exists
    const existingComponent = await Component.findOne({ id });
    if (existingComponent) {
      return res.status(409).json({ error: 'Component with this ID already exists' });
    }

    // Save new component
    const newComponent = new Component({ id, name, type, place, status });
    await newComponent.save();
    res.status(201).json({ message: 'Component added successfully' });
  } catch (error) {
    console.error('Error adding component:', error);
    res.status(500).json({ error: 'Error adding component', details: error.message });
  }
};

// Update Component
exports.updateComponent = async (req, res) => {
  try {
    const { id, name, type, place, status } = req.body;

    // Check if the component exists
    const component = await Component.findOne({ id });
    if (!component) {
      return res.status(404).json({ error: 'Component not found' });
    }

    // Update component fields
    await Component.findOneAndUpdate({ id }, { name, type, place, status });
    res.status(200).json({ message: 'Component updated successfully' });
  } catch (error) {
    console.error('Error updating component:', error);
    res.status(500).json({ error: 'Error updating component', details: error.message });
  }
};

// Delete Component
exports.deleteComponent = async (req, res) => {
  try {
    const { id } = req.body;

    // Check if the component exists
    const component = await Component.findOne({ id });
    if (!component) {
      return res.status(404).json({ error: 'Component not found' });
    }

    // Delete the component
    await Component.findOneAndDelete({ id });
    res.status(200).json({ message: 'Component deleted successfully' });
  } catch (error) {
    console.error('Error deleting component:', error);
    res.status(500).json({ error: 'Error deleting component', details: error.message });
  }
};

// Get Component States
exports.getComponentStates = async (req, res) => {
  try {
    const components = await Component.find({}, 'name status -_id');

    // Handle empty response case
    if (!components.length) {
      return res.status(404).json({ message: 'No components found' });
    }

    const response = components.reduce((acc, component) => {
      acc[component.name] = component.status;
      return acc;
    }, {});

    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching component states:', error);
    res.status(500).json({ 
      error: 'Error fetching component states',
      details: error.message 
    });
  }
};
