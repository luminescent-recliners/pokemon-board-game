import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from '../pokemon-socket.service';
import { AuthService } from '../auth.service';
import { GameFactoryService } from '../game-factory.service';


const debug = false;

@Component({
  selector: 'app-capture-pokemon',
  templateUrl: './capture-pokemon.component.html',
  styleUrls: ['./capture-pokemon.component.css']
})
export class CapturePokemonComponent implements OnInit, OnDestroy {

  rollvalue;
  result;
  rollNeeded = '';
  diceRolled = false;
  dice = '';
  imageUrl = '';
  pokemonColor = '';
  pokemon;
  message = 'ready';
  description = '';
  name = '';
  currentTurnPlayerName = '';
  currentTurnPlayerId = '';
  user = {
    email: '',
    name: '',
    gameId: -1
  };
  socketEvents = [];

  constructor(
    private pokeSocket: PokemonSocketService,
    private auth: AuthService,
    private router: Router,
    private gameService: GameFactoryService,
  ) { 

  }

  ngOnInit() {
    if ( debug ) { console.log( '%ccapture-pokemon ngOnInit()', 'color:orange'); }
    setTimeout(() => this.setUp(), 0);
  }

  setUp() {
    if (!this.auth.isAuth('board')) {
      this.router.navigate(['/signin']);
    }
    else {

      const user = this.auth.getCurrentUser();
      this.user = { ...this.user, ...user };

      if (this.user.gameId === -1) {
        this.router.navigate(['/home']);
        return;
      }

      this.initialize();

      this.socketEvents = [
        [ 'send response for capture page', this.sendResponseForCapturePageCB ],
        [ 'redirect back to board', this.redirectBackToBoardCB ]
      ];
      this.socketEvents.forEach( e => this.pokeSocket.register( e[0], e[1] ) );
    }
  }

  ngOnDestroy() {
    if ( debug ) { console.log( '%ccapture-pokemon ngOnDestroy()', 'color:orange'); }
    this.pokeSocket.deRegister( this.socketEvents );
  }

  initialize = () => {
    this.gameService.getGameTurn(this.user.gameId)
    .subscribe( (resp: any) => {
      this.currentTurnPlayerName = resp.name;
      this.currentTurnPlayerId = resp.email;
      this.gameService.getAvailablePokemon(this.user.gameId, this.currentTurnPlayerId)
      .subscribe((pokemon: any ) => {
        this.rollNeeded = pokemon.capture.join(', ');
        this.dice = pokemon.diceImg;
        this.imageUrl = pokemon.gifURL;
        this.pokemonColor = pokemon.color;
        this.pokemon = pokemon;
        this.message = 'ready';
        this.description = pokemon.description;
        this.name = pokemon.name;
      });
    });
  }

  sendResponseForCapturePageCB = (data: any) => {
    this.result = data.result.message;
    this.rollvalue = data.roll;
    this.diceRolled = true;
    const audioDice = new Audio('../assets/sounds/dice.mp3');
    audioDice.play();
    if (this.result === 'Sorry!! Pokemon Got Away' ) {
      const audioDiceLost = new Audio('../assets/sounds/bloop.mp3');
      audioDiceLost.play();
    } 
    else {
      const audioDiceCaught = new Audio('../assets/sounds/caught.mp3');
      audioDiceCaught.play();
    }
  }

  redirectBackToBoardCB = () => {
    const audioRedir = new Audio('../assets/sounds/pop.mp3');
    audioRedir.play();
    this.router.navigate(['/board']).catch( console.error ) ;
  }

  rollDice =  () => {
    const audioDice = new Audio('../assets/sounds/dice.mp3');
    audioDice.play();
    this.rollvalue = Math.ceil(Math.random() * 6);
    this.gameService.catchPokemon(this.user.gameId, this.user.email, this.rollvalue, this.pokemonColor, this.pokemon)
    .subscribe( (resp: any) => {
      this.result = resp.message;
      if (this.result === 'Sorry!! Pokemon Got Away' ) {
        const audioDiceFail = new Audio('../assets/sounds/bloop.mp3');
        audioDiceFail.play();
      } 
      else {
        const audioDiceCaught = new Audio('../assets/sounds/caught.mp3');
        audioDiceCaught.play();
      }
      this.pokeSocket.emit('roll die for capture', {gameId: this.user.gameId, result: this.result, roll: this.rollvalue});
    });
    this.message = '';
    this.diceRolled = true;
  }

  updateTurn = () => {
    const audioRedir = new Audio('../assets/sounds/pop.mp3');
    audioRedir.play();
    this.gameService.updateTurn(this.user.gameId, 'boardView')
    .subscribe( (resp) =>  {
      this.pokeSocket.emit('emit users back to board', {gameId: this.user.gameId});
      this.router.navigate(['/board']).catch( console.error );
    });
  }

  printstate() {
    console.log( 'rollvalue:', this.rollvalue );
    console.log( 'result:', this.result );
    console.log( 'rollNeeded:', this.rollNeeded );
    console.log( 'diceRolled:', this.diceRolled );
    console.log( 'dice:', this.dice );
    console.log( 'imageUrl:', this.imageUrl );
    console.log( 'pokemonColor:', this.pokemonColor );
    console.log( 'pokemon:', this.pokemon );
    console.log( 'message:', this.message );
    console.log( 'description:', this.description );
    console.log( 'name:', this.name );
    console.log( 'currentTurnPlayerName:', this.currentTurnPlayerName );
    console.log( 'currentTurnPlayerId:', this.currentTurnPlayerId );
    console.log( 'user:', this.user );

  }

}
