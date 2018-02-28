const async = require('async');
const userCtrl = require('../users/userController');
const signToken = require('./signtoken');

const login = function(credentials, done) {
	if(!credentials.username || !credentials.password) return done(null, {error: "Invalid credentials..!"});

	async.waterfall([
			(cb => userCtrl.findUser(credentials.username, cb)),
			((userObj, cb) => userObj.verifyPassword(credentials.password) ? cb(null, userObj) : cb({error: 'Credentials mismatch'}) ),
			signToken
		], (err, result) => {
			return done(err, result);
	})
}

const logout = function(username, done) {

}

const signup = function(userObj, done) {
	async.waterfall([
			(cb => userCtrl.addNewUser(userObj.username, cb)),
			signToken
		], (err, result) => {
			return done(err, result);
	})
}

module.exports = {
	signup,
	login,
	logout
}