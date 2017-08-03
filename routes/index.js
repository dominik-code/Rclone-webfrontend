const routes = require('express').Router();
var logger = require('winston');

routes.get('/', (req, res) => {
  logger.info('Got Request');
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
