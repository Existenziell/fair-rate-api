const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

// Initialize the app
const app = express();
const port = process.env.PORT || 3000;
const db = process.env.MONGODG_URI;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mongoose Connect
mongoose.connect(db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log(`MongoDB database connection established successfully.`);
  }
);

// Backend Routing (API)
const formsRouter = require('./src/routes/forms');

// Mount the routers to the express app
app.use('/forms', formsRouter);

// Start server
app.listen(port, () => {
  console.log(`API Server is running on port ${port}`);
});
