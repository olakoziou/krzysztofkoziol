const Video = require('../models/videoModel');

exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json({
      status: 'success',
      results: videos.length,
      data: {
        videos,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      msg: err,
    });
  }
};
