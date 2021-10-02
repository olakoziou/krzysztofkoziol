const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    data: [String],
    test: String,
  },
  { collection: 'gallery' }
);

const Gallery = new mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
