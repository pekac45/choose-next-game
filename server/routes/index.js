const express = require('express');

const router = express.Router();
const Games = require('../models/gameModel');

router.get('/', (req, res) => {
  Games.find({}, (err, photos) => {
    res.json(photos);
  });
});

module.exports = router;
