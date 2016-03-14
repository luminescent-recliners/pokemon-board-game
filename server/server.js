var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dbConfig = require('./db/db.js');

mongoose.connect('mongodb://localhost/pokemon');

var router = require('./routes.js');
var app = express();

var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(router);
app.use(express.static(__dirname + '/../public'));

app.listen(port);
console.log('Server listening on..', port);

module.exports = app;