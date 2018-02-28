const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const USER_ROLES = [ 'admin', 'customer', 'support', 'vendor'];

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true, index: { unique: true }, trim: true },
	hash_password: { type: String, required: true },
	role: { type: String, enum: USER_ROLES, default: 'customer', required: true, index: true },
	firstName: { type: String, required: true, trim: true},
	lastName: { type: String, required: true, trim: true},
	created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now }
}, {collection: 'users'});

//virtuals
UserSchema
	.virtual('password')
	.set(function(password) {
		this._password = password;
		this.hash_password = this.encryptPassword(password);
	})
	.get(function() {
		return this._password;
	});

/**
 * Instance Methods
 */
UserSchema.methods = {

	verifyPassword: function(plainText) {
		return bcrypt.compareSync(plainText, this.hash_password);
	},

	encryptPassword: function(plainText) {
		return bcrypt.hashSync(plainText, bcrypt.genSaltSync(10)); //generated salt
	}
};

module.exports = mongoose.model('users', UserSchema);