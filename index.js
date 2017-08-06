var logger = require('winston');
var path = require('path');
var express = require('express')
var app = express();
var routes = require('./routes');
var PORT = process.env.PORT || 3000;

logger.info('Im fine');
//  Connect all our routes to our application
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/V1', routes);

// Turn on that server!
app.listen(PORT, () => {
  logger.info(`App listening on port ${PORT}`);
});