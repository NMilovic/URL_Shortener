const express = require('express');
const router = express.Router();

//controller
const UrlController = require('../controllers/urls');

router.get('/:url', UrlController.getUrl);

module.exports = router;