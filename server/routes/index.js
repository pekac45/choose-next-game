const express = require('express');

const router = express.Router();
const Games = require('../models/gameModel');

router.get('/', (req, res) => {
  Games.find({}, (err, games) => {
    res.json(games);
  });
});

// TODO: ADD FUNCTIONALITY
router.route('/Add').post(function(req, res) {
  const game = new Games(req.body);
  console.log(game);
  game
    .save()
    .then(game => {
      res.status(200).json({ game: 'Game added successfully' });
    })
    .catch(err => {
      res.status(400).send('adding new game failed');
    });
});

module.exports = router;
