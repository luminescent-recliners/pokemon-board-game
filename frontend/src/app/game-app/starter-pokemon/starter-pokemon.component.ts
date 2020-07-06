import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { concat  } from 'rxjs';
import { map } from 'rxjs/operators';

import { PokemonSocketService } from '../../pokemon-socket.service';
import { AuthService } from '../../auth.service';
import { GameFactoryService } from '../../game-factory.service';
import { UserService } from '../../user.service';

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
  
  email = '';
  name = '';
  gameId = '';
  selectedPokemon = null;
  gameTurnEmail = '';
  selectedSprite = null;
  gameTurnName = '';
  message = '';
  spriteList = [];
  list = [];
  socketEvents = [];

  ngOnInit() {
    this.email = this.auth.email.getValue();
    this.name = this.auth.name.getValue();
    this.gameId = this.auth.gameId.getValue();

    this.initialize( 'setup' );

    this.socketEvents = [
      [ 'refresh after pokemon selection', this.refreshAfterPokemonSelectionCB ]
    ];
    this.socketEvents.forEach( e => this.pokeSocket.register( e[0], e[1] ) );
  }

  ngOnDestroy() {
    this.pokeSocket.deRegister( this.socketEvents );
  }

  refreshAfterPokemonSelectionCB = ( data: any ) => {
    if ( data.doneselection ) {
      this.gameService.updateCurrentPage( this.gameId, 'boardView' )
      .subscribe(() => {
        this.router.navigate([`game/${this.gameId}/board`]).catch( console.error );
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
      this.userService.playerInit(this.gameId, this.email, this.selectedPokemon, this.selectedSprite)
      .subscribe( (resp: any) => {
        this.gameTurnName = resp.name;
        this.gameTurnEmail = resp.email;
        this.pokeSocket.emit('a pokemon was selected', {gameId: this.gameId, pokemon: this.selectedPokemon});
      });
    } 
    else {
      this.message = 'Have To Select a Pokemon And a Trainer!!';
    }
  }

  initialize = (where) => {
    let count = 0;
    // these are all independent of each other --I think -- so can do concurrently
    // TODO: there is likely a better way to do this investigate RxJs
    concat( 
      this.gameService.getGameTurn( this.gameId),
      this.gameService.getRemainingStarterPokemon(this.gameId),
      this.gameService.getRemainingSprites(this.gameId)
    )
    .pipe(
      map( (results: any ) => {
        count++;
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
    console.log( 'user', this.email, this.name, this.gameId );
    console.log( 'selectedPokemon:', this.selectedPokemon );
    console.log( 'gameTurnEmail:', this.gameTurnEmail );
    console.log( 'selectedSprite:', this.selectedSprite );
    console.log( 'gameTurnName:', this.gameTurnName );
    console.log( 'message:', this.message );
    console.log( 'spriteList:', this.spriteList );
    console.log( 'list:', this.list );
  }

}
