/* eslint-disable no-unused-vars */
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production'; // true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); // part of next config
const mongoose = require('mongoose');

const routes = require('./routes/index');
const Game = require('./models/gameModel');

// const db = mongoose
//   .connect('mongodb://localhost:27017/Games', { useNewUrlParser: true, useFindAndModify: false })
//   .then(console.log('Connection with DB established'));

const dbUrl = 'mongodb://testuser:9VmdK3uECiWH@ds021016.mlab.com:21016/choose-next-game';
const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false
};

mongoose
  .connect(dbUrl, dbOptions)
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.log(err);
    console.log('Not connected to database');
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

nextApp
  .prepare()
  .then(() => {
    // express code here
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api/games', routes);

    app.get('*', (req, res) => {
      return handle(req, res); // for all the react stuff
    });

    app.post('/api/games', (req, res) => {
      const newGame = new Game(req.body);
      newGame.save(err => {
        if (err) {
          console.log(req);
          console.log(err);
        }
        // saved!
        res.json();
      });
    });

    app.put('/api/games/:id', (req, res) => {
      const { id } = req.params;
      Game.findById(id, (err, response) => {
        const newHotValue = response.hotValue - 3;
        const newPlays = response.plays + 1;
        Game.findByIdAndUpdate(id, { $set: { hotValue: newHotValue, plays: newPlays } }, error => {
          if (error) {
            console.log(error);
          }
          res.send('Updated');
        });
      });

      // Game.findByIdAndUpdate(req.params.id, { $set: { hotValue: 100 } }, err => {

      //   if (err) {
      //     console.log(err);
      //   }
      //   res.send('Done');
      // });
    });

    app.delete('/api/games/:id', (req, res) => {
      Game.findByIdAndRemove({ _id: req.params.id })
        .then(() => {
          res.status(200).json({
            message: 'Deleted!',
            id: res._id,
            name: res.name
          });
        })
        .catch(error => {
          res.status(400).json({
            error
          });
        });
    });

    app.listen(PORT, err => {
      if (err) throw err;
      console.log(`ready at http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.log(error);
    throw new Error('something happened, see detail log');
  });
