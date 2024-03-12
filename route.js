const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.send('Home Page');
});

router.get('/login', (req, res) => {
  res.send('Login Page');
});

router.get('/register', (req, res) => {
  res.send('Register Page');
});

router.use((req, res) => {
  res.status(404).send('Page Not Found');
});

module.exports = router;
