const router = require('express').Router();
const logger = require('../../logger');

router.post('/resources', function(req, res) {
	res.send({message: 'you posted a new resource'});
});

router.get('/resources', function(req, res) {
	let colln = [{message: 'this is your resource colln'}];
	res.send(colln);
});


module.exports = router;