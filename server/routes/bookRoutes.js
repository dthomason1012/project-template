const express = require('express');
const { getAllBooks, getSingleBook } = require('../controllers/bookController');
const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getSingleBook);

module.exports = router;
