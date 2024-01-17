// Create web server

// Importing the 'express' module
const express = require('express');

// Creating an instance of Express
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, this is a simple Express web server!');
});

// Define a route for /about
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Specify the port to listen on
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});