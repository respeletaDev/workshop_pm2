const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')();


const app = express();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Load api routes
app.use('/', routes);

//Handling errors
app.use(async (error, req, res, next) => {
  console.log(`${req.method} ${req.url} ${error.message} ${error.stack}`);
  console.log(`Error Trace:`, error);
  try {
    return res.status(500).send({ errors: [{ message: error.message }] });
  } catch (error) {
    return next(error);
  }

});

module.exports = app;
