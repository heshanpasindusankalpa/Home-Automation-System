const Component = require('./model');

exports.getComponents = async (req, res) => {
  try {
    const components = await Component.find();
    res.status(200).json({ response: components });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching components' });
  }
};

exports.addComponent = async (req, res) => {
  try {
    const { id, name, type, status } = req.body;
    const newComponent = new Component({ id, name, type, status });
    await newComponent.save();
    res.status(201).json({ message: 'Component added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding component' });
  }
};

exports.updateComponent = async (req, res) => {
  try {
    const { id, name, type, status } = req.body;
    await Component.findOneAndUpdate({ id }, { name, type, status });
    res.status(200).json({ message: 'Component updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating component' });
  }
};

exports.deleteComponent = async (req, res) => {
  try {
    const { id } = req.body;
    await Component.findOneAndDelete({ id });
    res.status(200).json({ message: 'Component deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting component' });
  }
};