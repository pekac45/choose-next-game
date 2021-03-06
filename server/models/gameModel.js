const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameModel = new Schema(
  {
    name: String,
    hotValue: { type: Number },
    plays: { type: Number, default: 0 }
  },
  { collection: 'Games' }
);

module.exports = mongoose.model('Game', gameModel);
