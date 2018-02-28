const log4js = require('log4js');
const config = require('./config');

log4js.configure({
  appenders: { logfile: { type: 'file', filename: config.LOG_FILE }, console: { type: 'console' } },
  categories: { default: { appenders: ['logfile', 'console'], level: 'debug' } }
});

const logger = log4js.getLogger('default');

module.exports = logger;