const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Checking the working of api');
});

module.exports = router;
