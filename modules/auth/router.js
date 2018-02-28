const router = require('express').Router();
const logger = require('../../logger');

router.post('/signup', function(req, res) {
	logger.debug("Request received for signup..!");

	// Add new user

	res.send({message: 'you are now signedup'});
});

router.post('/login', function(req, res) {
	logger.debug("Request received for login..!");

	// Find user, check the identity and generate token for authentication if identity matches

	res.send({message: 'you logged in'});
});

router.post('/logout', function(req, res) {
	logger.debug("Request received for logout..!");

	// Destroy the token or do any cleanup if you want to do

	res.send({message: 'you logged out'});
});


module.exports = router;