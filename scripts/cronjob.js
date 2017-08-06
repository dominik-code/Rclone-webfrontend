var logger = require('winston');
var cron = require('cron'); 

logger.info('Loading cronjob');


var job1 = new cron.CronJob({
  cronTime: '* * * * *',
  onTick: function() {
    logger.info('job 1 ticked');
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});

var job2 = new cron.CronJob({
  cronTime: '* * * * *',
  onTick: function() {
    logger.info('job 2 ticked');
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});

logger.info('job1 status', {status:job1.running}); // job1 status undefined
logger.info('job2 status', {status:job2.running}); // job2 status undefined

job1.start(); // job 1 started

logger.info('job1 status', {status:job1.running}); // job1 status true
logger.info('job2 status', {status:job2.running}); // job2 status undefined