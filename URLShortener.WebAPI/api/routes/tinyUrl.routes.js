const express = require('express');
const router = express.Router();

//controller
const TinyUrlController = require('../controllers/tinyUrls');

router.post('/shorten', TinyUrlController.shorten);

module.exports = router;