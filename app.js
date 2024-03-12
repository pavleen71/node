const express = require('express');
const app = express();

// Import routes from route.js
const routes = require('./route');

// Use routes defined in route.js
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
