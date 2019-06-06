const express = require('express');

const feedController = require('../controller/feed');

const router = express.Router();

router.get('/books', feedController.getBooks);
//router.post('/sbvalidator', feedController.SBValidator);

module.exports = router;