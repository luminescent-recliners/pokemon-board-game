const download = require('image-downloader');
var trainerSprites = [
  {
    name: 'Male Trainer',
    spriteId: 1,
    type: 'trainer',
    description: 'A description of Sprite still to come.',
    imageURL: './img/trainer1.gif'
  },
  {
    name: 'Male Trainer',
    spriteId: 2,
    type: 'trainer',
    description: 'A description of Sprite still to come.',
    imageURL: './img/trainer2.gif'
  },
  {
    name: 'Female Trainer',
    spriteId: 3,
    type: 'trainer',
    description: 'A description of Sprite still to come.',
    imageURL: './img/trainer3.gif'
  },
  {
    name:  'Female Trainer',
    spriteId: 4,
    type: 'trainer',
    description: 'A description of Sprite still to come.',
    imageURL: './img/trainer4.gif'
  },
  {
    name: 'Male Trainer',
    spriteId: 5,
    type: 'trainer',
    description: 'A description of Sprite still to come.',
    imageURL: './img/trainer5.gif'
  },
  {
    name: 'Female Trainer',
    spriteId: 6,
    type: 'trainer',
    description: 'A description of Sprite still to come.',
    imageURL: './img/trainer6.gif'
  }
];


for (var i = 0; i < trainerSprites.length; i++) {
  const options = {
    url: trainerSprites[i].imageURL,
    dest: '/../../public/img/' + 'trainer' + trainerSprites[i].spriteId + 'gif' 
  }
  download.image(options)
    .then(({ filename, image }) => {
      console.log('File saved to', filename)
    }).catch((err) => {
      throw err
    })
} 
// Download to a directory and save with the original filename 
 

module.exports = trainerSprites;
