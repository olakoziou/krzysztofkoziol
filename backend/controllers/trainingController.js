const Training = require('../models/trainingModel');

exports.getTrainig = async (req, res) => {
  try {
    const training = await Training.find();
    res.status(200).json({
      status: 'success',
      results: training.length,
      data: {
        training,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      msg: err,
    });
  }
};
