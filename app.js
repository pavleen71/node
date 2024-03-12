const express = require('express');
const app = express();
const routes = require('./route');
app.use('/', routes);
app.listen(7000, () => {
  console.log("server is running");
});
