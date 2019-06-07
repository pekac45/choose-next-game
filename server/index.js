/* eslint-disable no-unused-vars */
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production'; // true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); // part of next config
const mongoose = require('mongoose');
const routes = require('./routes/index');

const db = mongoose.connect('mongodb://localhost:27017/Games');

nextApp
  .prepare()
  .then(() => {
    // express code here
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api/games', routes);
    app.get('*', (req, res) => {
      return handle(req, res); // for all the react stuff
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
