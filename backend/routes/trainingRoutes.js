const express = require('express');
const trainingController = require('../controllers/trainingController');

const router = express.Router();

router.route('/').get(trainingController.getTrainig);

module.exports = router;
