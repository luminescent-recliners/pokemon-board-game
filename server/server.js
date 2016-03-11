var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var router = require('./routes.js');
var app = express();

var port = 3000;
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));

app.use('/api', router);
app.use(express.static(_dirname + '/../client'));

app.listen(port);
console.log('Server listening on..', port);

module.exports = app;