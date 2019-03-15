const express = require('express');
const app = express();

// Create a simple endpoint to just return an object with a message
app.get('/', (req, res) => {
  res.status(200).send({message: 'CI with travis', data: null})
});

//Initialize the server
const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

//Export the server instance
module.exports = server;