import { Component, OnInit, OnDestroy } from '@angular/core';

import { PokemonSocketService } from '../../pokemon-socket.service';
import { AuthService } from '../../auth.service';
import { GameFactoryService } from '../../game-factory.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit, OnDestroy {

  email = '';
  name = '';
  gameId = '';
  message = '';
  gameName = '';
  gameCreator = '';
  gameCreatorName = '';
  myGameCreator = false;
  users = [];
  socketEvents = [];

  constructor(
    private pokeSocket: PokemonSocketService,
    private auth: AuthService,
    private gameService: GameFactoryService,
  ) { 

  }

  ngOnInit() {
    this.email = this.auth.email.getValue();
    this.name = this.auth.name.getValue();
    this.gameId = this.auth.gameId.getValue();

    this.gameService.lobbyInit( this.gameId )
    .subscribe( (resp: any) => {
      this.gameName = resp.gameName;
      this.gameCreator = resp.gameCreator;
      this.gameCreatorName = resp.creatorName;
      if ( this.gameCreator === this.email ) {
        this.myGameCreator = true;
      } 
      this.pokeSocket.emit( 'enteredLobby', { gameId: this.gameId } );
    });

    this.socketEvents = [
      [ 'lobby-users', this.usersInLobbyCB ],
    ];
    this.socketEvents.forEach( e => this.pokeSocket.register( e[0], e[1] ) );
  }

  ngOnDestroy() {
    this.pokeSocket.deRegister( this.socketEvents );
    this.pokeSocket.emit( 'a user left lobby', { gameId: this.gameId, user: { email: this.email, name: this.name } } );
  }

  usersInLobbyCB = (currentUsers) => {
    this.users = currentUsers;
  }

  getStarterView = () => {
    this.gameService.addUsers( this.gameId, this.users )
    .subscribe( (resp: any) => {
      this.pokeSocket.emit( 'creatorStartsGame', { gameId: this.gameId } );
    });
  }

  printstate() {
    console.log( '\nuser:', this.name, this.email, this.gameId );
    console.log( 'message:', this.message );
    console.log( 'gameCreator:', this.gameCreator );
    console.log( 'gameCreatorName:', this.gameCreatorName );
    console.log( 'myGameCreator:', this.myGameCreator );
    console.log( 'users:', this.users );
  }

}
