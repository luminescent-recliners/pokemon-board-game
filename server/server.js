var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dbConfig = require('./db/db.js');

mongoose.connect('mongodb://localhost/pokemon');

var router = require('./routes.js');
var app = express();


// for sockets
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(router);
app.use(express.static(__dirname + '/../public'));

// for sockets
var conectioncounter = 0;
io.on('connection', function(socket){
  console.log('a user connected', conectioncounter++, socket);
  socket.on('disconnect', function(something) {
    conectioncounter--;
    console.log('a user disconnected', conectioncounter, something);
  });
});

// app.listen(port);
// console.log('Server listening on..', port);

// for sockets
http.listen(port, function() {
  console.log('Server listening on..', port);
});

module.exports = app;