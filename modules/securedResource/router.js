const router = require('express').Router();
const logger = require('../../logger');

router.post('/resources', function(req, res) {
	logger.debug("Request for secure resource with claims ", req.claims);
	res.send({message: 'you posted a new resource'});
});

router.get('/resources', function(req, res) {
	logger.debug("Request for secure resource with claims ", req.claims);
	let colln = [{message: 'this is your resource colln'}];
	res.send(colln);
});


module.exports = router;