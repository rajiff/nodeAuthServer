const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

const mongoConn = require('./mongoConnection')();

let app = express();

// Put helmet on top of middleware it can verify all the request first
app.use(helmet());

// Configure morgan to log your requests, with a standard date & time format
morgan.token('time', (req, res) => new Date().toISOString());
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

app.use(compression());

// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Avoid frequent (spam) favicon request by sending no content status
app.use('/favicon.ico', function(req, res, next) {
    res.status(204);
    next();
});

app.use('/auth', require('./modules/auth'));
app.use('/secure',
	require('./modules/auth/verifytoken'),
	require('./modules/securedResource'));

app.use(function(req, res) {
	res.status(404).send({message: 'Requested resource not found..!'});
})

module.exports = app;
