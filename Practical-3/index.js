// Importing the Express library
const express = require('express');

// Creating an Express application instance
const app = express();

// Serving static files from the 'public' directory
app.use(express.static('public'));

// Starting the server and listening on port 4000
app.listen(4000, () => {
    console.log("Server is started");
});
