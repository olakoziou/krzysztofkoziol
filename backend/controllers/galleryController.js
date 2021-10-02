const Gallery = require('../models/galleryModel');

exports.getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find();

    res.json({
      status: 'success',
      results: gallery.length,
      data: {
        gallery,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      msg: err,
    });
  }
};
