const express = require('express');
const galleryController = require('../controllers/galleryController');

const router = express.Router();

router.route('/').get(galleryController.getGallery);

module.exports = router;
