const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use('/api/products', productRoute);

mongoose
  .connect(
    'mongodb+srv://oguzyuksel92:cbqxzWLA3ib7ctUk@backenddb.r7qil71.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB'
  )
  .then(() => {
    console.log('Connected to Mongo DB Database!');

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Mongo DB Connection failed!');
  });
