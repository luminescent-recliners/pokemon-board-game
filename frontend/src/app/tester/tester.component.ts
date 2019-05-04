import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { BoardFactoryService } from '../board-factory.service';
import { GameFactoryService } from '../game-factory.service';
import { PokemonSocketService } from '../pokemon-socket.service';
import { AuthService } from '../auth.service';


const USER =  {
  email : 'aa@aa',
  name : 'aa',
  playerIndex : 0,
  badges : [],
  party : [ 
      {
          visible : false,
          alive : true,
          capture : [],
          diceImg : [],
          _id : '5cca6126dda61242167328a5',
          name : 'Clefairy',
          description : 'The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.',
          pokemonId : 35,
          imageURL : './img/clefairy.gif',
          color : 'starter',
          gifURL : './img/clefairy.gif',
          __v : 0,
          selected : true
      }, 
      {
          visible : false,
          alive : true,
          capture : [ 
              3, 
              4, 
              5
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
          ],
          _id : '5cca6126dda61242167328b8',
          name : 'Psyduck',
          description : 'When its headache intensifies, it starts using strange powers. However, it has no recollection of its powers, so it always looks befuddled and bewildered.',
          pokemonId : 54,
          imageURL : './img/psyduck.gif',
          color : 'pink',
          gifURL : './img/psyduck.gif',
          __v : 0
      }, 
      {
          visible : false,
          alive : true,
          capture : [ 
              3, 
              4, 
              5
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
          ],
          _id : '5cca6126dda61242167328f8',
          name : 'Goldeen',
          description : 'Its dorsal, pecto ral and tail fins wave elegantly in water. That is why it is known as the water dancer.',
          pokemonId : 118,
          imageURL : './img/goldeen.gif',
          color : 'pink',
          gifURL : './img/goldeen.gif',
          __v : 0
      }, 
      {
          visible : false,
          alive : true,
          capture : [ 
              3, 
              4, 
              5
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
          ],
          _id : '5cca6126dda612421673289d',
          name : 'Sandshrew',
          description : 'It burrows and lives underground. If threatened, it curls itself up into a ball for protection.',
          pokemonId : 27,
          imageURL : './img/sandshrew.gif',
          color : 'pink',
          gifURL : './img/sandshrew.gif',
          __v : 0
      }, 
      {
          visible : false,
          alive : true,
          capture : [ 
              3, 
              4, 
              5
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
          ],
          _id : '5cca6126dda6124216732892',
          name : 'Pidgey',
          description : 'PIDGEY has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.',
          pokemonId : 16,
          imageURL : './img/pidgey.gif',
          color : 'pink',
          gifURL : './img/pidgey.gif',
          __v : 0
      }, 
      {
          visible : false,
          alive : true,
          capture : [ 
              4, 
              5
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
          ],
          _id : '5cca6126dda61242167328b5',
          name : 'Dugtrio',
          description : 'A team of triplets that can burrow over 60 MPH. Due to this, some people think it\'s an earthquake.',
          pokemonId : 51,
          imageURL : './img/dugtrio.gif',
          color : 'green',
          gifURL : './img/dugtrio.gif',
          __v : 0
      }, 
      {
          visible : true,
          alive : true,
          capture : [ 
              4, 
              5
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
          ],
          _id : '5cca6126dda61242167328e7',
          name : 'Electrode',
          description : 'One of ELECTRODEs characteristics is its attraction to electricity. It is a problematical POKMON that congregates mostly at electrical power plants to feed on electricity that has just been generated.',
          pokemonId : 101,
          imageURL : './img/electrode.gif',
          color : 'green',
          gifURL : './img/electrode.gif',
          __v : 0
      }, 
      {
          visible : false,
          alive : true,
          capture : [ 
              3, 
              4
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
          ],
          _id : '5cca6126dda612421673289a',
          name : 'Arbok',
          description : 'The frightening patterns on its belly have been studied. Six variations have been confirmed.',
          pokemonId : 24,
          imageURL : './img/arbok.gif',
          color : 'blue',
          gifURL : './img/arbok.gif',
          __v : 0
      }, 
      {
          visible : false,
          alive : true,
          capture : [ 
              3, 
              4
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
          ],
          _id : '5cca6126dda612421673290e',
          name : 'Kabuto',
          description : 'This POKMON lived in ancient times. On rare occasions, it has been discovered as a living fossil.',
          pokemonId : 140,
          imageURL : './img/kabuto.gif',
          color : 'blue',
          gifURL : './img/kabuto.gif',
          __v : 0
      }, 
      {
          visible : false,
          alive : true,
          capture : [ 
              3, 
              4
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
          ],
          _id : '5cca6126dda612421673288e',
          name : 'Butterfree',
          description : 'It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.',
          pokemonId : 12,
          imageURL : './img/butterfree.gif',
          color : 'blue',
          gifURL : './img/butterfree.gif',
          __v : 0
      }, 
      {
          visible : true,
          alive : true,
          capture : [ 
              3, 
              4
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
          ],
          _id : '5cca6126dda6124216732898',
          name : 'Fearow',
          description : 'It cleverly uses its thin, long beak to pluck and eat small insects that hide under the ground.',
          pokemonId : 22,
          imageURL : './img/fearow.gif',
          color : 'blue',
          gifURL : './img/fearow.gif',
          __v : 0
      }, 
      {
          visible : true,
          alive : true,
          capture : [ 
              3, 
              4
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
          ],
          _id : '5cca6126dda6124216732915',
          name : 'Dratini',
          description : 'DRATINI continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.',
          pokemonId : 147,
          imageURL : './img/dratini.gif',
          color : 'blue',
          gifURL : './img/dratini.gif',
          __v : 0
      }, 
      {
          visible : true,
          alive : true,
          capture : [ 
              5
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
          ],
          _id : '5cca6126dda61242167328c6',
          name : 'Machamp',
          description : 'MACHAMP is known as the POKMON that has mastered every kind of martial arts. If it grabs hold of the foe with its four arms, the battle is all but over. The hapless foe is thrown far over the horizon.',
          pokemonId : 68,
          imageURL : './img/machamp.gif',
          color : 'red',
          gifURL : './img/machamp.gif',
          __v : 0
      }, 
      {
          visible : true,
          alive : true,
          capture : [ 
              5
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
          ],
          _id : '5cca6126dda6124216732911',
          name : 'Snorlax',
          description : 'SNORLAXs typical day consists of nothing more than eating and sleeping. It is such a docile POKMON that there are children who use its big belly as a place to play.',
          pokemonId : 143,
          imageURL : './img/snorlax.gif',
          color : 'red',
          gifURL : './img/snorlax.gif',
          __v : 0
      }, 
      {
          visible : false,
          alive : true,
          capture : [ 
              3, 
              4
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
          ],
          _id : '5cca6dc594be614391bbef93',
          name : 'Poliwrath',
          description : 'An adept swimmer, it knows the front crawl, butterfly, and more. It is faster than the best human swimmers.',
          pokemonId : 62,
          imageURL : './img/poliwrath.gif',
          color : 'blue',
          gifURL : './img/poliwrath.gif',
          __v : 0
      }, 
      {
          visible : true,
          alive : true,
          capture : [ 
              3, 
              4
          ],
          diceImg : [ 
              'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
              'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
          ],
          _id : '5cca6126dda61242167328a1',
          name : 'Nidoqueen',
          description : 'It uses its scaly, rugged body to seal the entrance of its nest and protect its young from predators.',
          pokemonId : 31,
          imageURL : './img/nidoqueen.gif',
          color : 'blue',
          gifURL : './img/nidoqueen.gif',
          __v : 0
      },
      {
        visible : false,
        alive : true,
        capture : [],
        diceImg : [],
        _id : '5cca6126dda61242167328a5',
        name : 'Clefairy',
        description : 'The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.',
        pokemonId : 35,
        imageURL : './img/clefairy.gif',
        color : 'starter',
        gifURL : './img/clefairy.gif',
        __v : 0,
        selected : true
    }, 
    {
        visible : false,
        alive : true,
        capture : [ 
            3, 
            4, 
            5
        ],
        diceImg : [ 
            'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
            'https://www.wpclipart.com/recreation/games/dice/die_face_4.png', 
            'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
        ],
        _id : '5cca6126dda61242167328b8',
        name : 'Psyduck',
        description : 'When its headache intensifies, it starts using strange powers. However, it has no recollection of its powers, so it always looks befuddled and bewildered.',
        pokemonId : 54,
        imageURL : './img/psyduck.gif',
        color : 'pink',
        gifURL : './img/psyduck.gif',
        __v : 0
    },
    {
        visible : false,
        alive : true,
        capture : [ 
            3, 
            4
        ],
        diceImg : [ 
            'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
            'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
        ],
        _id : '5cca6126dda612421673288e',
        name : 'Butterfree',
        description : 'It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.',
        pokemonId : 12,
        imageURL : './img/butterfree.gif',
        color : 'blue',
        gifURL : './img/butterfree.gif',
        __v : 0
    }, 
    {
        visible : true,
        alive : true,
        capture : [ 
            3, 
            4
        ],
        diceImg : [ 
            'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
            'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
        ],
        _id : '5cca6126dda6124216732898',
        name : 'Fearow',
        description : 'It cleverly uses its thin, long beak to pluck and eat small insects that hide under the ground.',
        pokemonId : 22,
        imageURL : './img/fearow.gif',
        color : 'blue',
        gifURL : './img/fearow.gif',
        __v : 0
    }, 
    {
        visible : true,
        alive : true,
        capture : [ 
            3, 
            4
        ],
        diceImg : [ 
            'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
            'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
        ],
        _id : '5cca6126dda6124216732915',
        name : 'Dratini',
        description : 'DRATINI continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.',
        pokemonId : 147,
        imageURL : './img/dratini.gif',
        color : 'blue',
        gifURL : './img/dratini.gif',
        __v : 0
    }, 
    {
        visible : true,
        alive : true,
        capture : [ 
            5
        ],
        diceImg : [ 
            'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
        ],
        _id : '5cca6126dda61242167328c6',
        name : 'Machamp',
        description : 'MACHAMP is known as the POKMON that has mastered every kind of martial arts. If it grabs hold of the foe with its four arms, the battle is all but over. The hapless foe is thrown far over the horizon.',
        pokemonId : 68,
        imageURL : './img/machamp.gif',
        color : 'red',
        gifURL : './img/machamp.gif',
        __v : 0
    }, 
    {
        visible : true,
        alive : true,
        capture : [ 
            5
        ],
        diceImg : [ 
            'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
        ],
        _id : '5cca6126dda6124216732911',
        name : 'Snorlax',
        description : 'SNORLAXs typical day consists of nothing more than eating and sleeping. It is such a docile POKMON that there are children who use its big belly as a place to play.',
        pokemonId : 143,
        imageURL : './img/snorlax.gif',
        color : 'red',
        gifURL : './img/snorlax.gif',
        __v : 0
    }, 
    {
        visible : false,
        alive : true,
        capture : [ 
            3, 
            4
        ],
        diceImg : [ 
            'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
            'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
        ],
        _id : '5cca6dc594be614391bbef93',
        name : 'Poliwrath',
        description : 'An adept swimmer, it knows the front crawl, butterfly, and more. It is faster than the best human swimmers.',
        pokemonId : 62,
        imageURL : './img/poliwrath.gif',
        color : 'blue',
        gifURL : './img/poliwrath.gif',
        __v : 0
    }, 
    {
        visible : true,
        alive : true,
        capture : [ 
            3, 
            4
        ],
        diceImg : [ 
            'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
            'https://www.wpclipart.com/recreation/games/dice/die_face_4.png'
        ],
        _id : '5cca6126dda61242167328a1',
        name : 'Nidoqueen',
        description : 'It uses its scaly, rugged body to seal the entrance of its nest and protect its young from predators.',
        pokemonId : 31,
        imageURL : './img/nidoqueen.gif',
        color : 'blue',
        gifURL : './img/nidoqueen.gif',
        __v : 0
    },
    {
      visible : false,
      alive : true,
      capture : [],
      diceImg : [],
      _id : '5cca6126dda61242167328a5',
      name : 'Clefairy',
      description : 'The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.',
      pokemonId : 35,
      imageURL : './img/clefairy.gif',
      color : 'starter',
      gifURL : './img/clefairy.gif',
      __v : 0,
      selected : true
  }, 
  {
      visible : false,
      alive : true,
      capture : [ 
          3, 
          4, 
          5
      ],
      diceImg : [ 
          'https://www.wpclipart.com/recreation/games/dice/die_face_3.png', 
          'https://www.wpclipart.com/recreation/games/dice/die_face_4.png', 
          'https://www.wpclipart.com/recreation/games/dice/die_face_5.png'
      ],
      _id : '5cca6126dda61242167328b8',
      name : 'Psyduck',
      description : 'When its headache intensifies, it starts using strange powers. However, it has no recollection of its powers, so it always looks befuddled and bewildered.',
      pokemonId : 54,
      imageURL : './img/psyduck.gif',
      color : 'pink',
      gifURL : './img/psyduck.gif',
      __v : 0
  },
  ],
  box : [],
  itemCards : [],
  positionOnBoard : 32,
  citiesVisited : [ 
      0
  ],
  lastCity : 0,
  pokemonCount : {
      pink : 4,
      green : 2,
      blue : 7,
      red : 2
  },
  sprite : './img/trainer5.gif'
};

const debug = true;

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit, OnDestroy {

  renderConnection = true;

  user = USER;

  

  constructor(
    private boardService: BoardFactoryService,
    private gameService: GameFactoryService,
    private socket: PokemonSocketService,
    private router: Router,
    private auth: AuthService,
    private santizer: DomSanitizer
  ) { 

  }

  ngOnInit() {
    console.log( '%ctester on init()', 'color:purple' );
    this.socket.register( 'hello-world' , this.helloWorldCB );

  }

  ngOnDestroy() {
    console.log( '%ctester on destroy', 'color:purple' );
    this.socket.deRegister([ 'hello-world', this.helloWorldCB ]);
  }

  /* Socket Connection */

  helloWorldCB = v => console.log(v);

  printstate() {
    console.log( 'printstate()' );
  }

  register() {
    this.socket.register( 'hello-world' , this.helloWorldCB );
  }

  deregister() {
    this.socket.deRegister([ 'hello-world', this.helloWorldCB ] );
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

}
