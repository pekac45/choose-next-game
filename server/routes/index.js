const express = require('express');
const bodyParser = require('body-parser');

const Games = require('../models/gameModel');

const router = express.Router();
router.use(bodyParser.json({ type: 'application/json' }));

router.get('/', (req, res) => {
  Games.find({}, (err, games) => {
    res.json(games);
  });
});

// TODO: ADD FUNCTIONALITY

module.exports = router;
