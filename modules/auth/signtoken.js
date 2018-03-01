const jwt = require('jsonwebtoken');
const logger = require('../../logger');
const jwtSecret = require('./jwtSecret');

module.exports = function(userObj, done) {
	// Keep the payload compact
	let payload = {
		unm: userObj.username,
		fnm: userObj.firstName,
		lnm: userObj.lastName,
		rle: userObj.role
	};

	let secretOrPrivateKey = jwtSecret;

	let options = {
		algorithm: 'HS256', // Ensure option carries the algorithm required to sign/verify the token
		expiresIn: (60 * 3),
		issuer: '@basavarajkn'
	};
	jwt.sign(payload, secretOrPrivateKey, options, done);
}