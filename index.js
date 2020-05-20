const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

const score = require('./routes/score');
app.use('/scores', score);

app.use(function (res, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  console.log("err.status", err.status)
  next(err);
})
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })
})

const PORT = 4040;
const ADDRESS = 'https://wandering-mouse-server.herokuapp.com/';

app.listen(PORT, ADDRESS, () => {
  console.log(`Listening => port: ${PORT} Address: ${ADDRESS}`)
});