const express = require('express');

const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server on port 80
const port = 80;
app.listen(port, () => {
    
  console.log(`Server is running on port ${port}`);
});
