const express = require('express');
const buyTrainingController = require('../controllers/buyTrainingController');

const router = express.Router();

router.route('/').get(buyTrainingController.buyTraining);

module.exports = router;
