const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router'); // Ensure this points to your routes file

const app = express();
const port = 3001;
const host = 'localhost';

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI
const uri = 'mongodb://pasindusankalpa2021:QF5WTOkietfbnoLV@cluster0-shard-00-00.u3yt5.mongodb.net:27017,cluster0-shard-00-01.u3yt5.mongodb.net:27017,cluster0-shard-00-02.u3yt5.mongodb.net:27017/?ssl=true&replicaSet=atlas-mivgen-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

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
