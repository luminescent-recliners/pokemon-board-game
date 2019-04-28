import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from '../pokemon-socket.service';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { GameFactoryService } from '../game-factory.service';

const debug = false;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  message = '';
  user = {
    email: '',
    name: '',
    gameId: -1
  };
  games = [];
  availGames = [];
  myGames = [];
  newGameName = '';
  socketEvents = [];

  constructor(
    private pokeSocket: PokemonSocketService,
    private auth: AuthService,
    private router: Router,
    private userService: UserService,
    private gameService: GameFactoryService
  ) { 

  }

  ngOnInit() {
    setTimeout( () => this.setUp(), 0);
  }

  setUp() {
    if ( !this.auth.isAuth('home') ) {
      this.router.navigate([ '/signin' ]);
    }
    else {
      const user = this.auth.getCurrentUser();
      this.user = { ...this.user, ...user };
      this.userGames();

      this.socketEvents = [
        [ 'updateAvailGames', this.populateGamesAndMyGames ],
      ];
      this.socketEvents.forEach( e => this.pokeSocket.register( e[0], e[1] ) );
      
      if ( this.user.gameId !== -1 ) {

        this.pokeSocket.emit( 'a user left lobby', { 
          gameId: this.user.gameId, 
          user: { 
            email: this.user.email,
            name: this.user.name 
          } 
        });

        this.auth.delGameId();
        this.user.gameId = -1;
      }

    }
  }

  ngOnDestroy() {
    this.pokeSocket.deRegister( this.socketEvents );
  }

  populateGamesAndMyGames = ( games ) => {
    if ( debug ) { console.log( 'populateGamesAndMyGames()', games ); }
    this.games = games;
    this.availGames = [];
    this.myGames = [];
    for ( const game of games ) {
      if ( game.gameStarted ) {
        for ( const player of game.gamePlayers ){
          if ( player.email === this.user.email) {
            this.myGames.push(game);
          }
        }
      } 
      else {
        if ( game.gameCreator.email === this.user.email ) {
          this.myGames.push(game);
        }
        this.availGames.push( game );
      }
    }
  }

  userGames = () => {
    if ( debug ) { console.log( 'userGames()' ); }
    this.userService.getGames()
    .subscribe( this.populateGamesAndMyGames );
  }

  makeNewGame = () => {
    const len = 5;
    if (this.newGameName.length >= len ) {
      this.message = '';
      this.userService.addGame( this.newGameName, this.user.email, this.user.name)
      .subscribe( v => {
        this.newGameName = '';
      });
    } 
    else {
      this.message = `Game name required to be at least ${len} charchters long`;
    }
  }

  logout = () => {
    this.auth.logOut();
  }

  clearMessage = () => this.message = '';

  joinLobby = ( id, gameStarted ) => {
    const data = {
      gameId: id,
      user: {
        name: this.user.name,
        email: this.user.email
      }
    };
    if ( gameStarted === false) {
      this.gameService.requestLobbyEntry(id)
      .subscribe( (resp: any) => {
        if ( resp.requestAccepted ) {
          this.auth.setGameId( id );
          this.pokeSocket.emit( 'joinLobby', data );

          this.router.navigate([ '/lobby' ])
          .catch( console.error );
        } 
        else {
          this.message = 'Sorry, This game already has 6 players! Pls select another game.';
        }
      });
    } 
    else {
      this.auth.setGameId( id );
      this.pokeSocket.emit('join resume lobby', data );
      this.router.navigate([ '/resumelobby' ])
      .catch( console.error ); 
    } 
  }

  printstate() {
    console.log( '\nuser:', this.user );
    console.log( 'message:', this.message );
    console.log( 'games:', this.games );
    console.log( 'myGames:', this.myGames );
    console.log( 'availGames:', this.availGames );
    console.log( 'newGameName:', this.newGameName );
  }


}


