const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameModel = new Schema({
  name: String,
  hottness: { type: Number, default: 100 },
  plays: { type: Number, default: 0 }
});

module.exports = mongoose.model('Game', gameModel);
