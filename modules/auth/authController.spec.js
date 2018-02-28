const chai = require('chai');
const expect = chai.expect;

const authCtrl = require('./authController');

const mongoConn = require('../../mongoConnection')();

describe('Login controller specs', function() {
	it('Login a valid user', function(done) {
		let credentials = {
			username: 'basav@junk.com',
			password: 'basav!23'
		};

		authCtrl.login(credentials, (err, result) => {
			expect(err).equal(null);

			console.log("Result of login ", result);
			done();
		});
	})
});