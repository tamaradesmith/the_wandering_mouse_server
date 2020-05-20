const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.options('*', cors())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', "*");
  next();
});

const score = require('./routes/score');
app.use('/scores', score);


const PORT = 4040;
const ADDRESS = 'https://wandering-mouse-server.herokuapp.com/';

app.listen(PORT, ADDRESS, () => {
  console.log(`Listening => port: ${PORT} Address: ${ADDRESS}`)
});