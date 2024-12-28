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

// MongoDB Connection URI
const uri = 'mongodb://pasindusankalpa2021:QF5WTOkietfbnoLV@cluster0-shard-00-00.u3yt5.mongodb.net:27017,cluster0-shard-00-01.u3yt5.mongodb.net:27017,cluster0-shard-00-02.u3yt5.mongodb.net:27017/?ssl=true&replicaSet=atlas-mivgen-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};
connectToMongoDB();

// Start the server
const server = app.listen(port, host, () => {
  console.log(`Node server is listening on http://${host}:${server.address().port}`);
});

// Routes
app.use('/api', router);
