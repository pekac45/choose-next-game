const express = require('express');
const bodyParser = require('body-parser');

const Games = require('../models/gameModel');

const router = express.Router();
router.use(bodyParser.json({ type: 'application/json' }));

router.get('/', (req, res) => {
  Games.find({}, (err, games) => {
    console.log(games);

    res.json(games);
  });
});

module.exports = router;
