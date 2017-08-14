var routes = require('express').Router();
var logger = require('winston');
var cronjobs = require('../scripts/cronjob.js');
var databse = require('../scripts/database.js');

routes.get('/', (req, res) => {
  logger.info('Got Request on API v1');
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
