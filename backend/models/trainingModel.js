const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  target: {
    type: [String],
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  agenda: {
    type: [Object],
  },
});

const Trainig = new mongoose.model('Training', trainingSchema);

module.exports = Trainig;
