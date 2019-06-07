const express = require('express');

const router = express.Router();
const Games = require('../models/gameModel');

router.get('/', (req, res) => {
  Games.find({}, (err, games) => {
    res.json(games);
    console.log(games);
  });
});

module.exports = router;
