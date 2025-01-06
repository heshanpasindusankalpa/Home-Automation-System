const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();
const port = 3001;
const host = 'localhost';

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI
const uri = 'mongodb://your_username:your_password@cluster0.mongodb.net/dbname?retryWrites=true&w=majority';

// MongoDB Connection
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', router);

// Start Server
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
