const UserModel = require('./user.entity');
const logger = require('../../logger');

// Save
const addNewUser = function(userObj, done) {
  let userDoc = new UserModel();

  userDoc.username = userObj.username;
  userDoc.password = userObj.password;
  userDoc.role = userObj.role;
  userDoc.firstName = userObj.firstName;
  userDoc.lastName = userObj.lastName;
  userDoc.created_at = new Date();
  userDoc.updated_at = new Date();

  userDoc.save((err, savedDoc) => {
  	logger.debug('Are you saving');
    if (err) {
      logger.error("Error in adding new user, ERROR::", err);
      return done(err);
    }

    return done(null, savedDoc);
  });
}

// Update

// FindOne
const findUser = function(username, done) {
  let query = {};
  let fieldOptions = { _id: 0, __v: 0 };

  UserModel
    .findOne(query)
    .select(fieldOptions)
    .exec((err, userObj) => {
      if (err) {
        console.error('Error in finding user, ERROR::', err, ' queried for ', query);
        return done(err);
      }
      return done(null, userObj);
    });
}

module.exports = {
  addNewUser,
  findUser
}