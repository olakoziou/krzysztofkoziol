const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  description: String,
  title: String,
  url: String,
});

const Video = new mongoose.model('Video', videoSchema);

module.exports = Video;
