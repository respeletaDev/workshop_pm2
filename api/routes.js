const express = require('express');
const router = express.Router();

module.exports = () => {
  //index
  const indexRouter = express.Router();
  indexRouter.get('/', (req, res) => {
    res.status(200).json({ response: ' API is working properly.' });
  });


  router.use('/', indexRouter);

  return router;
};
