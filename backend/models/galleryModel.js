const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    imgs: [Object],
    display: Boolean,
  },
  { collection: 'gallery' }
);

const Gallery = new mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
