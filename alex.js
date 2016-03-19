// added and commented on a JavaScript/JSON snippet: getPokemon.js 
var http = require('http');
var fs = require('fs');
var request = require('request');
var _ = require('underscore');

// function for getting all pokemon descriptions
var url1 = "http://www.pokeapi.co/api/v1/description/";
var filename = 'test2.txt';
var count = 5;
var url  = url1;
var makeCall = function(count) {
  console.log(count);
  if(count >= 2550) {
    console.log('done');
    return;

  } else {
    count += 10;
    var url = url1 + count;
    request(url, function(err, response, body) {
      var dat = JSON.parse(body);
      var id = dat.pokemon.resource_uri.trim() || 0;
      var image = id;
      id = id.split('/');
      id = id.splice(-2)[0];

      var dataToWrite = {
        "name": dat.pokemon.name,
        "description": dat.description,
        "id": id,
        "imageUrl": 'http://'
      };
      dataToWrite = JSON.stringify(dataToWrite);
      dataToWrite += '\n';
      console.log(dataToWrite);
      fs.appendFile(__dirname + '/' + filename, dataToWrite, 'utf-8', function(){makeCall(count);});
    });
  }
};
// makeCall(count); // spent an hour at home fixing code and it took 43.5s to run (get data)


var cat = {
  red:[5],
  pink:[3,4,5],
  blue:[3,4],
  green:[4,5],
  gold:[6]
};

var whatColor = function(id){
  // arrays of pokemon color id numbers
  var red = [142,65,59,87,148,125,103,141,115,131,126,139,95,78,112,123,9,113,6,149,94,130,128,3,68,143];
  var pink = [84,21,32,48,92,37,60,90,81,19,29,102,13,16,118,72,74,79,39,116,98,100,10,54,69,23,41,120,46,88,129,27,63,43,50];
  var blue = [12,20,26,62,127,18,105,67,124,106,107,76,55,22,83,15,24,34,122,40,135,2,97,136,147,5,110,71,49,111,53,57,134,45,8,31,38,138,140];
  var green = [70,82,75,77,51,137,66,104,99,96,101,91,33,108,11,14,109,42,58,80,64,93,61,56,86,89,47,40,30,119,121,114,44,28,36,73,117,85,132,17,133];
  var gold = [145,150,144,146];
  var starter = [7,52,1,4,25,35];

  if(red.indexOf(id) >= 0) { return 'red';}
  if(pink.indexOf(id) >= 0) { return 'pink';}
  if(blue.indexOf(id) >= 0) { return 'blue';}
  if(green.indexOf(id) >= 0) { return 'green';}
  if(gold.indexOf(id) >= 0) { return 'gold';}
  if(starter.indexOf(id) >= 0) { return 'starter';}
};
// console.log(whatColor(12));

// for(var i = 1; i < 151; i++ ) {
//   console.log(whatColor(i), i);
// }


// alexs function for generating image file names
var zeroConverter = function(num) {
 var stringNum = String(num);
 while (stringNum.length !== 3) {
   stringNum = '0' + stringNum;
 }
 return stringNum;
};




// create a unique list of pokemon
// to be used to populate the database once
var makeUnique = function() {
  var data = fs.readFileSync(__dirname + '/test2.txt' , 'utf8');
  data = data.trim();
  data = data.split('\n');
  data = data.map(function(entry, i) {
    // console.log(i, entry);
    return JSON.parse(entry);
  });
  data = _.groupBy(data, function(entry){return entry.id;});
  var result = [];
  for(var i = 1; i < 151; i++) {
    var ID = parseInt(data[i][0].id);
    var URL = 'http://sprites.pokecheck.org/i/' + zeroConverter(ID) +'.gif';

    var color = whatColor(ID);
    name = data[i][0].name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    
    data[i][0]['imageUrl'] = 'http://pokeapi.co/media/img/'+ID+'.png ';
    data[i][0].name = name;
    data[i][0]['alive'] = true;
    data[i][0]['visible'] = false;
    data[i][0]['color'] = color;
    data[i][0]['capture'] = cat[color];
    // data[i][0]['evolutions'] = [];
    data[i][0]['gifURL'] = URL;
    result.push(data[i][0]);
  }


  // write data to file
  var filename = 'pokemonData.js',
  dataToWrite = JSON.stringify(result);
  fs.appendFileSync(__dirname + '/' + filename, dataToWrite, 'utf-8');

  // console.log data
  // return result;
};
// console.log(makeUnique());
makeUnique();
