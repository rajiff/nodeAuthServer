const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./logger');

const setupMongooseConnections = function() {
  mongoose.Promise = global.Promise;

  // mongoose.set('debug', true);

  mongoose.connect(config.MONGO.MONGO_URL);

  mongoose.connection.on('connected', function() {
    logger.info('Mongoose is now connected to ', config.MONGO.MONGO_URL);
  });

  mongoose.connection.on('error', function(err) {
    logger.error('Error in Mongoose connection: ', err);
  });

  mongoose.connection.on('disconnected', function() {
    logger.error('Mongoose is now disconnected..!');
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      logger.error('Mongoose disconnected on process termination');
      process.exit(0);
    });
  });
}

module.exports = setupMongooseConnections;
