const jwt = require('jsonwebtoken');
const logger = require('../../logger');
const jwtSecret = require('./jwtSecret');

module.exports = function (req, res, next) {
	logger.debug('Intercepting the route for authentication to secured resources...');

	let token = req.headers.authorization;
	let secretOrPublicKey = jwtSecret;
	let options = {
		algorithm: 'HS256',
		issuer: '@basavarajkn'
	};

	jwt.verify(token, secretOrPublicKey, options, (err, result) => {
		if(err) {
			logger.error("Error in verifying token ERROR::", err);
			return res.status(403).send({message: 'unauthorized'});
		}

		req.claims = {
			user: {
				username: result.unm,
				firstName: result.fnm,
				lastName: result.lnm,
				role: result.rle
			}
		};

		return next();
	})
}