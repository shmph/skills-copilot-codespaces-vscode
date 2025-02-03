// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Import the comments.json file
const comments = require('./comments.json');

// Serve static files
app.use(express.static('public'));

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});