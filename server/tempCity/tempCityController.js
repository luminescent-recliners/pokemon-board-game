var Q = require('q');
var tempCityData = require('../data/tempCityData.js');

  module.exports.getRandomURL= function(req, res, next) {
    var x = Math.floor(Math.random() * tempCityData.length)
    var returned = {
      descriptions: tempCityData[x].description,
      cityURL: tempCityData[x].cityURL
    };
      res.send(returned);
  };
