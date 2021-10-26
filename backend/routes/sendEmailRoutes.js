const express = require('express');
const sendEmailController = require('../controllers/sendEmailController');

const router = express.Router();

router.route('/').post(sendEmailController.sendEmail);

module.exports = router;
