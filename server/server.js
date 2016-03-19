var express = require('express');
var app = express();
var http = require('http').Server(app);
var dbConfig = require('./db/db.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routes.js');

var io = require('socket.io')(http);

mongoose.connect('mongodb://localhost/pokemon');

var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

io.on( 'connect' , function( socket ){
  console.log( 'we are connected!!' );
  socket.on( 'disconnect', function() {
    console.log( 'were not connected anymore' );
  });

  //this recieves the create event emitted in client/sessions/sessions.js-emitCreate
  socket.on('test', function(data) {
    console.log(data.message);
    io.emit('receivedTest', 'Hello from the server');
  });

});

app.use(router);
app.use(express.static(__dirname + '/../public'));

http.listen(port);
console.log('Server listening on..', port);

module.exports = app;