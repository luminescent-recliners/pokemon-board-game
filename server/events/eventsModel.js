var mongoose = require('mongoose');

var eventsSchema = mongoose.Schema({
  eventsID: Number,
  name: String,
  type: String,
  description: String,
  function: {},
});

var events = mongoose.model('events', eventsSchema);

module.exports = events;
