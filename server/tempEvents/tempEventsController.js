var Q = require('q');
var tempEventData = require('../data/tempEventData.js');

  module.exports.getRandomURL= function(req, res, next) {
    var x = Math.floor(Math.random() * tempEventData.length)
    var returned = {
      descriptions: tempEventData[x].description,
      eventURL: tempEventData[x].eventURL
    };
      res.send(returned);
  };
