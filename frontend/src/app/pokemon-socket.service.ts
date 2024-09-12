import { Injectable, OnDestroy } from '@angular/core';
import * as io from 'socket.io-client';

import { socketUrl } from './config';

const debug = false;

@Injectable({
  providedIn: 'root'
})
export class PokemonSocketService implements OnDestroy {
  
  private socket;

  private url = socketUrl;

  constructor() {
    if ( debug ) { console.log( '%cPokemonSocketService constructor()', 'color:green;' ); }
    this.socket = io( this.url, {
      autoConnect: false
    });
    this.socket.on( 'connect', s => { console.log( 'Connected Socket.io.id', this.socket.id ); });
    this.socket.on( 'disconnect', s => { console.log( 'Disconnected Socket.io' ); });
  }

  ngOnDestroy() {
    if ( debug ) { console.log( '%CPokemonSocketService OnDestroy()', 'color:green;' ); }
    this.disconnect();
  }

  register( event, cb ) {
    const cblist = this.socket._callbacks[ `$${event}` ];
    if ( cblist && Array.isArray( cblist ) ) {
      const i = cblist.indexOf( cb );
      if ( i === -1 ) {
        this.socket.on( event. cb );
      }
    }
    else {
      this.socket.on( event, cb );
    }
    if ( debug ) { this.log(); }
  }

  deRegister( events ) {
    for ( const [ event, cb ] of events ) {
      let cblist = this.socket._callbacks[ `$${event}` ];

      // I think I can replace this with something like:
      //    this.socket.off( event, cb );
      // test it and change if so.

      if ( cblist && Array.isArray( cblist ) ) {
        const i = cblist.indexOf( cb );
        cblist = cblist.slice( 0, i ).concat( cblist.slice( i + 1) );
        if ( cblist.length === 0 ) {
          delete this.socket._callbacks[ `$${event}` ];
        }
        else {
          this.socket._callbacks[ `$${event}` ] = cblist;
        }
      }
    }
  }

  get isConnected() {
    return this.socket.connected;
  }

  disconnect() {
    if ( this.socket.connected ) {
      this.socket.disconnect();
    }
  }

  connect() {
    if ( !this.socket.connected ) {
      this.socket.connect();
    }
  }

  emit( event, data ) {
    this.socket.emit( event, data );
  }

  log() {
    console.log( 'callbacks', this.socket._callbacks );
    console.log( 'id:', this.socket.id );
    console.dir( this.socket );
  }


  

}
