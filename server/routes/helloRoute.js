const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.status(200).send({ message: 'Hello World!' });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

module.exports = router;
