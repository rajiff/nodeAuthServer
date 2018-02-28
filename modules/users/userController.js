const UserDAO = require('./userDAO');

// SAVE
const addNewUser = function(userObj, done) {
	return userDAO.addNewUser(userObj, done);
}

// FIND ONE
const findUser = function(username, done) {
	return userDAO.findUser(username, done);
}

module.exports = {
	addNewUser,
	findUser
}