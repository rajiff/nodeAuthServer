const jwt = require('jsonwebtoken');
const logger = require('../../logger');
const jwtSecret = require('./jwtSecret');

module.exports = function(userObj, done) {
	let payload = {
		username: userObj.username,
		firstName: userObj.firstName,
		lastName: userObj.lastName,
		role: userObj.role
	};

	let secretOrPrivateKey = jwtSecret;

	let options = {
		algorithm: 'HS256',
		expiresIn: (60 * 3),
		issuer: '@basavarajkn'
	};
	jwt.sign(payload, secretOrPrivateKey, options, done);
}