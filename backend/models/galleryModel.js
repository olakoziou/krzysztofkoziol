const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    date: String,
    display: Boolean,
    imgs: [String],
  },
  { collection: 'gallery' }
);

const Gallery = new mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
