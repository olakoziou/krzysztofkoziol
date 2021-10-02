const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videos: [Object],
  intro: [Object],
});

const Video = new mongoose.model('Video', videoSchema);

module.exports = Video;
