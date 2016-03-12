var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/testDB');

var router = require('./routes.js');
var app = express();
app.use(router);

var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/../public'));

app.listen(port);
console.log('Server listening on..', port);

module.exports = app;