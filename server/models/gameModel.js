const mongoose = require('mongoose');

const { Schema } = mongoose;

const photoModel = new Schema({
  id: { type: Number },
  name: { type: String },
  hottness: { type: Number },
  plays: { type: Number }
});

module.exports = mongoose.model('photos', photoModel);
