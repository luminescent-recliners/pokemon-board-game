import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from '../pokemon-socket.service';
import { AuthService } from '../auth.service';
import { GameFactoryService } from '../game-factory.service';
import { UserService } from '../user.service';

const debug = false;

@Component({
  selector: 'app-resume-lobby',
  templateUrl: './resume-lobby.component.html',
  styleUrls: ['./resume-lobby.component.css']
})
export class ResumeLobbyComponent implements OnInit {

  message = '';
  user = {
    email: '',
    name: '',
    gameId: -1
  };
  gameName = '';
  gameCreatorId = '';
  gameCreator = '';
  users = [];
  usersInRoom = [];

  constructor(
    private pokeSocket: PokemonSocketService,
    private auth: AuthService,
    private router: Router,
    private userService: UserService,
    private gameService: GameFactoryService
  ) { }

  ngOnInit() {
    setTimeout( () => this.setUp(), 0);
  }

  setUp() {
    if ( debug ) { console.log( 'resume-lobby setup()' ); }
    if ( !this.auth.isAuth( 'resume-lobby' ) ) {
      this.router.navigate([ '/signin' ]);
    }
    else {
      
      const user = this.auth.getCurrentUser();
      this.user = { ...this.user, ...user };

      if ( this.user.gameId === -1 ) {
        this.router.navigate([ '/home' ]);
        return;
      }

      this.initialize();

      this.pokeSocket.register( 'join resume lobby', data => {
        if ( debug ) { console.log( 'resume-lobby [join resume lobby]', data ); }
        this.usersInRoom = data || [];
      });
    
      this.pokeSocket.register( 'users in resumegamelobby', resumeGameUserArray => {
        if ( debug ) { console.log( 'resume-lobby [users in resumegamelobby]', resumeGameUserArray ); }
        this.usersInRoom = resumeGameUserArray || [];
      });
    
      this.pokeSocket.register( 'moveAllPlayersToBoard', () => {
        if ( debug ) { console.log( 'resume-lobby [moveAllPlayersToBoard]' ); }
        this.router.navigate([ '/board' ]);
      });
    
      this.pokeSocket.register( 'update users in room', updatedusers => {
        if ( debug ) { console.log( 'resume-lobby [update users in room]', updatedusers ); }
        this.usersInRoom = updatedusers || [];
      });
    }
  }

  initialize = () => {
    if ( debug ) { console.log( 'resume-lobby initialzie()' ); }
    this.gameService.resumeGameLobbyInit(this.user.gameId)
    .subscribe( (resp: any) => {
      this.gameName = resp.gameName;
      this.gameCreator = resp.creatorName;
      this.gameCreatorId = resp.gameCreator;
      this.users = resp.users;
      this.pokeSocket.emit( 'entered resume lobby', { gameId: this.user.gameId });
    });
  }

  getBoardView = () => {
    if ( debug ) { console.log( 'resume-lobby getBoardView()' ); }
    this.pokeSocket.emit('creater enters board', { gameId: this.user.gameId });
  }

  printstate() {
    console.log( '\nuser:', this.user );
    console.log( 'message:', this.message );
    console.log( 'gameCreator:', this.gameCreator );
    console.log( 'gameCreatorId:', this.gameCreatorId );
    console.log( 'users:', this.users );
  }

}
