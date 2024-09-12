import { Component, OnInit, OnDestroy } from '@angular/core';

import { PokemonSocketService } from '../../pokemon-socket.service';
import { AuthService } from '../../auth.service';
import { GameFactoryService } from '../../game-factory.service';

@Component({
  selector: 'app-resume-lobby',
  templateUrl: './resume-lobby.component.html',
  styleUrls: ['./resume-lobby.component.css']
})
export class ResumeLobbyComponent implements OnInit, OnDestroy {

  message = '';
  email = '';
  name = '';
  gameId = '';
  gameName = '';
  gameCreatorId = '';
  gameCreator = '';
  users = [];
  usersInRoom = [];
  socketEvents = [];

  constructor(
    private pokeSocket: PokemonSocketService,
    private auth: AuthService,
    private gameService: GameFactoryService
  ) { 
  }

  ngOnInit() {
    this.email = this.auth.email.getValue();
    this.name = this.auth.name.getValue();
    this.gameId = this.auth.gameId.getValue();

    this.gameService.resumeGameLobbyInit(this.gameId)
    .subscribe( (resp: any) => {
      this.gameName = resp.gameName;
      this.gameCreator = resp.creatorName;
      this.gameCreatorId = resp.gameCreator;
      this.users = resp.users;
      this.pokeSocket.emit( 'entered resume lobby', { gameId: this.gameId });
    });

    this.socketEvents = [
      [ 'update-users-in-resume-lobby', this.usersInResumeLobbyCB ],
    ];
    this.socketEvents.forEach( e => this.pokeSocket.register( e[0], e[1] ) );
  }

  ngOnDestroy() {
    this.pokeSocket.deRegister( this.socketEvents );
  }

  usersInResumeLobbyCB = data => {
    this.usersInRoom = data || [];
    this.decorateUsers();
  }

  decorateUsers = () => {
    this.users.forEach( u => {
      u.ready = !!this.usersInRoom.find( uir => uir.email === u.email );
    });
  }

  getBoardView = () => {
    this.pokeSocket.emit('creater enters board', { gameId: this.gameId });
  }

  printstate() {
    console.log( '\nuser:', this.name, this.email, this.gameId );
    console.log( 'message:', this.message );
    console.log( 'gameCreator:', this.gameCreator );
    console.log( 'gameCreatorId:', this.gameCreatorId );
    console.log( 'users:', this.users );
    console.log( 'usersInRoom:', this.usersInRoom );
  }

}
