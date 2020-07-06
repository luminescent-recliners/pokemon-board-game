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
    gameId: ''
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
      
      if ( this.user.gameId !== '' ) {

        this.pokeSocket.emit( 'a user left lobby', { 
          gameId: this.user.gameId, 
          email: this.user.email,
        });

        this.auth.delGameId();
        this.user.gameId = '';
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

  joinLobby = ( id, gameStarted, gameEnded ) => {
    const data = {
      gameId: id,
      user: {
        name: this.user.name,
        email: this.user.email
      }
    };

    // TODO off load this logic onto game-app base page

    if ( gameStarted === false && !gameEnded ) {
      this.gameService.requestLobbyEntry(id)
      .subscribe( (resp: any) => {
        if ( resp.requestAccepted ) {
          this.auth.setGameId( id );
          this.pokeSocket.emit( 'joinLobby', data );
          this.user.gameId = id;
          this.router.navigate([ `game/${id}/lobby` ], { state: this.user }).catch( console.error );
          // this.router.navigate([ '/lobby' ]).catch( console.error );
          
        } 
        else {
          this.message = 'Sorry, This game already has 6 players! Pls select another game.';
        }
      });
    } 
    else if ( gameEnded ) {
      // dont have to wait for players etc
      this.auth.setGameId( id );
      this.router.navigate([ `/game/${id}/winner` ]).catch( console.error );
      // this.router.navigate([ '/winner' ]).catch( console.error );
    }
    else {
      this.auth.setGameId( id );
      this.pokeSocket.emit('join resume lobby', data );
      this.router.navigate([ `/game/${id}/resumelobby` ]).catch( console.error );
      // this.router.navigate([ '/resumelobby' ]).catch( console.error );
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


