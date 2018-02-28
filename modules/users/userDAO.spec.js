const chai = require('chai');
const expect = chai.expect;

const userDAO = require('./userDAO');
const mongoConn = require('../../mongoConnection')();

describe('CRUD of USER entity', function() {
	/*it('Add new User', function(done) {
		this.timeout(5000);

		let user = {
			username: 'basav@junk.com',
			password: 'basav123',
			role: 'admin',
			firstName: 'Basavaraj',
			lastName: 'K N'
		};

		userDAO.addNewUser(user, (err, result) => {
			expect(err).equal(null);
			expect(result.username).equal(user.username);
			expect(result.role).equal(user.role);
			expect(result.firstName).equal(user.firstName);
			expect(result.lastName).equal(user.lastName);
			// expect(result.password).equal(null);
			expect(result.hash_password).not.equal(null);
			done();
		});
	})*/

	it('Find User', function(done) {
		this.timeout(5000);

		let username = 'basav@junk.com';

		userDAO.findUser(username, (err, result) => {
			expect(err).equal(null);
			expect(result.username).equal(username);
			expect(result.password).equal(undefined);
			expect(result.hash_password).not.equal(null);

			// console.log("User ", result);
			done();
		});
	})
})