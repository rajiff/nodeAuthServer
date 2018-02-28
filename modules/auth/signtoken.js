const jwt = require('jsonwebtoken');

module.exports = function(userObj, done) {
	let payload = {
		username: userObj.username,
		firstName: userObj.firstName,
		lastName: userObj.lastName,
		role: userObj.role
	};

	let secretOrPrivateKey = "QuickBrownFoxJumpedOverTheLazyDog";

	let options = {
		algorithm: 'HS256',
		expiresIn: (60 * 3),
		issuer: '@basavarajkn'
	};
	jwt.sign(payload, secretOrPrivateKey, options, done);
}