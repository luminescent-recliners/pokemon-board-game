import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const debug = false;

@Injectable({
  providedIn: 'root'
})
export class GameFactoryService {

  constructor(
    private http: HttpClient
  ) { 

  }

  trainerInit( gameId, currentTurnUserId ) {
    return this.http.get( 'api/games/trainerInit', {
      params: {
        gameId,
        currentTurnUserId
      }
    });
  }

  lobbyInit( gameId ) {
    return this.http.get( 'api/games/lobbyinit', {
      params: {
        gameId
      }
    });
  }

  resumeGameLobbyInit( gameId ) {
    return this.http.get( 'api/games/resumegamelobbyinit', {
      params: {
        gameId
      }
    });
  }

  addUsers( gameId, users ) {
    return this.http.put( 'api/games/user', {
      gameId,
      users
    });
  }

  getGameTurn( gameId ) {
    return this.http.get( 'api/games/gameturn', {
      params: {
        gameId
      }
    });
  }

  catchPokemon( gameId, userId, roll, pokemonColor, pokemon ) {
    return this.http.put( 'api/games/user/catchPokemon', {
      gameId,
      userId,
      roll,
      pokemonColor,
      pokemon
    });
  }

  getAvailablePokemon( gameId, userId ) {
    return this.http.get( '/api/games/availablePokemon', {
      params: {
        gameId,
        userId
      }
    });
  }

  updateTurn( gameId, currentPage ) {
    return this.http.put( 'api/games/updateturn', {
      gameId,
      currentPage
    });
  }

  getRemainingStarterPokemon( gameId ) {
    return this.http.get( '/api/games/remainingStarterPokemon', {
      params: {
        gameId
      }
    });
  }

  getCurrentPage( gameId ) {
    if ( debug ) { console.log( 'gameFactory getCurrentPage gameId', gameId ); }
    return this.http.get( '/api/games/currentPage', {
      params: {
        gameId
      }
    });
  }

  updateCurrentPage( gameId, currentPage ) {
    if ( debug ) { console.log( 'gameFactory updateCurrentPage gameId:', gameId, 'currentPage:', currentPage ); }
    return this.http.put( '/api/games/currentPage', {
      gameId,
      currentPage
    });
  }

  getRemainingSprites( gameId ) {
    return this.http.get( '/api/games/remainingSprites', {
      params: {
        gameId
      }
    });
  }

  requestLobbyEntry( gameId ) {
    return this.http.put( '/api/games/requestlobbyentry', {
      gameId
    });
  }

  updatePlayerCounter( gameId ) {
    return this.http.put( '/api/games/updateplayercounter', {
        gameId
    });
  }

  getEventGif() {
    return this.http.get( '/api/tempEvents/getURL' );
  }

  getCityGif() {
    return this.http.get( 'api/tempCity/getURL' );
  }
}


  