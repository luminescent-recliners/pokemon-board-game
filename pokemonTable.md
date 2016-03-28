# Pokemon

  - This table is generated once and never changes
  - Stores all the individual pokemon data
```javascript
  {
    name: 'Venusaur',
    description: 'It is able to ... it is more powerful in the summertime.',
    pokemonId: '3',
    imageURL: 'http://pokeapi.co/media/img/3.png ',
    alive: true,
    visible: false,
    color: 'red',
    capture: [ 5 ],
    gifURL: 'http://sprites.pokecheck.org/i/003.gif',
    diceImg: [ 'https://www.wpclipart.com/recreation/games/dice/die_face_5.png' ] 
  }
  ```
  - alive: will be used when battles are implemented
  - visible: is used to display pokemon on board during game play
  - capture: is the dice roll required to capture the pokemon
  - diceImg: is a dice image with the capture value 