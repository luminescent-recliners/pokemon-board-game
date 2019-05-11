import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { concat  } from 'rxjs';
import { map } from 'rxjs/operators';

import { PokemonSocketService } from '../../pokemon-socket.service';
import { AuthService } from '../../auth.service';
import { GameFactoryService } from '../../game-factory.service';
import { UserService } from '../../user.service';

const debug = false;

@Component({
  selector: 'app-starter-pokemon',
  templateUrl: './starter-pokemon.component.html',
  styleUrls: ['./starter-pokemon.component.css']
})
export class StarterPokemonComponent implements OnInit, OnDestroy {

  constructor(
    private pokeSocket: PokemonSocketService,
    private auth: AuthService,
    private router: Router,
    private gameService: GameFactoryService,
    private userService: UserService,
  ) { 

  }
  
  user = {
    email: '',
    name: '',
    gameId: ''
  };

  selectedPokemon = null;
  gameTurnEmail = '';
  selectedSprite = null;
  gameTurnName = '';
  message = '';
  spriteList = [];
  list = [];
  socketEvents = [];

  ngOnInit() {
    setTimeout(() => this.setUp(), 0);
  }

  setUp() {
    if (!this.auth.isAuth('board')) {
      this.router.navigate(['/signin']);
    }
    else {

      const user = this.auth.getCurrentUser();
      this.user = { ...this.user, ...user };

      if (this.user.gameId === '' ) {
        this.router.navigate(['/home']);
        return;
      }

      this.initialize( 'setup' );

      this.socketEvents = [
        [ 'refresh after pokemon selection', this.refreshAfterPokemonSelectionCB ]
      ];
      this.socketEvents.forEach( e => this.pokeSocket.register( e[0], e[1] ) );
    }
  }

  ngOnDestroy() {
    this.pokeSocket.deRegister( this.socketEvents );
  }

  refreshAfterPokemonSelectionCB = ( data: any ) => {
    if ( debug ) { console.log('[refresh after pokemon selection]', data); }
    if ( data.doneselection ) {
      this.gameService.updateCurrentPage( this.user.gameId, 'boardView' )
      .subscribe(() => {
        if ( debug ) { console.log('[refresh after pokemon selection] subscribe'); }
        this.router.navigate([`game/${this.user.gameId}/board`]).catch( console.error );
      });
    } 
    else {
      this.initialize( 'socket' );
    }
  }

  getStarter = currpokemon => {
    this.list.forEach( i => {
      if ( currpokemon.name === i.name ) {
        i.selected = true;
        this.selectedPokemon = currpokemon;
      }
      else {
        i.selected = false;
      }
    });
  }

  selectSprite = currentSprite => { 
    this.spriteList.forEach( i => {
      if ( currentSprite.spriteId === i.spriteId ) {
        i.selected = true;
        this.selectedSprite = currentSprite;
      }
      else {
        i.selected = false;
      }      
    });
  }

  playerInit = () => {
    if ( this.selectedPokemon !== null && this.selectedSprite !== null )  {
      this.userService.playerInit(this.user.gameId, this.user.email, this.selectedPokemon, this.selectedSprite)
      .subscribe( (resp: any) => {
        this.gameTurnName = resp.name;
        this.gameTurnEmail = resp.email;
        this.pokeSocket.emit('a pokemon was selected', {gameId: this.user.gameId, pokemon: this.selectedPokemon});
      });
    } 
    else {
      this.message = 'Have To Select a Pokemon And a Trainer!!';
    }
  }

  initialize = (where) => {
    if ( debug ) { console.log('initialize() from -', where); }
    let count = 0;
    // these are all independent of each other --I think -- so can do concurrently
    // TODO: there is likely a better way to do this investigate RxJs
    concat( 
      this.gameService.getGameTurn( this.user.gameId),
      this.gameService.getRemainingStarterPokemon(this.user.gameId),
      this.gameService.getRemainingSprites(this.user.gameId)
    )
    .pipe(
      map( (results: any ) => {
        count++;
        if ( debug ) { console.log( 'initialize map', count, results ); }
        switch ( count ) {
          case 1:
            this.gameTurnEmail = results.email;
            this.gameTurnName = results.name;
            break;
          case 2:
            this.list = results;
            break;
          case 3:
            this.spriteList = results;
            break;
        }
      })
    )
    .subscribe( () => {});
  }

  printstate() {
    console.log( 'user', this.user );
    console.log( 'selectedPokemon:', this.selectedPokemon );
    console.log( 'gameTurnEmail:', this.gameTurnEmail );
    console.log( 'selectedSprite:', this.selectedSprite );
    console.log( 'gameTurnName:', this.gameTurnName );
    console.log( 'message:', this.message );
    console.log( 'spriteList:', this.spriteList );
    console.log( 'list:', this.list );
  }

}
