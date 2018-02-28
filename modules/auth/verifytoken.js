const logger = require('../../logger');

module.exports = function (req, res, next) {
	logger.debug('Intercepting the route to secured resources...');

	// @TBD verify the token on request object

	next();
}