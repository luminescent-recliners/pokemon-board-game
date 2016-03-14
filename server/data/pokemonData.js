module.exports = [
  {
    name: 'Bulbasaur',
    pokemonId: 1,
    color: 'pink',
    description: 'For some time after its birth, it grows by gaining nourishment from the seed on its back.',
    visible: {
      type: Boolean,
      default: true
    },
    alive: {
      type: Boolean,
      default: true
    },
    imageURL: '/api/v1/pokemon/1/',
    specs: {
      attackName: 'Leech Seed',
      attackStrength: 4
    }
  },
  {
    name: 'Charmander',
    pokemonId: 4,
    color: 'pink',
    description: 'From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.',
    visible: {
      type: Boolean,
      default: true
    },
    alive: {
      type: Boolean,
      default: true
    },
    imageURL: '/api/v1/pokemon/4/',
    specs: {
      attackName: 'Ember',
      attackStrength: 4
    }
  },
  {
    name: 'Squirtle',
    pokemonId: 7,
    color: 'pink',
    description: 'It shelters itself in its shell, then strikes back with spouts of water at every opportunity.',
    visible: {
      type: Boolean,
      default: true
    },
    alive: {
      type: Boolean,
      default: true
    },
    imageURL: '/api/v1/pokemon/7/',
    specs: {
      attackName: 'Water Gun',
      attackStrength: 4
    }
  },
  {
    name: 'Pikachu',
    pokemonId: 25,
    color: 'pink',
    description: 'It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state.',
    visible: {
      type: Boolean,
      default: true
    },
    alive: {
      type: Boolean,
      default: true
    },
    imageURL: '/api/v1/pokemon/25/',
    specs: {
      attackName: 'ThunderShock',
      attackStrength: 3
    }
  },
  {
    name: 'Clefairy',
    pokemonId: 35,
    color: 'pink',
    description: 'The moonlight that it stores in the wings on its back apparently gives it the ability to float in mIdair.',
    visible: {
      type: Boolean,
      default: true
    },
    alive: {
      type: Boolean,
      default: true
    },
    imageURL: '/api/v1/pokemon/35/',
    specs: {
      attackName: 'Pound',
      attackStrength: 3
    }
  },
  {
    name: 'Meowth',
    pokemonId: 52,
    color: 'pink',
    description: 'MEOWTH withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this POKMON loves shiny coins that glitter with light.',
    visible: {
      type: Boolean,
      default: true
    },
    alive: {
      type: Boolean,
      default: true
    },
    imageURL: '/api/v1/pokemon/52/',
    specs: {
      attackName: 'Bite',
      attackStrength: 3
    }
  }
]