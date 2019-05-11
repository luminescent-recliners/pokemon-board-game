import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { map, withLatestFrom, switchMap, concatMap } from 'rxjs/operators';
import { from, observable, Observable, concat, of, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from './pokemon-socket.service';

const debug = false;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {
    email: '',
    name: '',
    gameId: ''
  };

  isLoggedIn = false;

  email = new BehaviorSubject( '' );
  name = new BehaviorSubject( '' );
  gameId = new BehaviorSubject( '' );
  loggedIn = new BehaviorSubject( false );
  dummy = new BehaviorSubject( '' );

  constructor( 
    private cookieService: CookieService,
    // private location: Location,
    private http: HttpClient,
    private socket: PokemonSocketService,
    private router: Router
  ) { 
    if ( this.getSession() && !this.user.email ) {
      this.getUserInfo()
      .subscribe( (d: any) => {
        this.setUserInfo(d);
        if ( !d.result ) {
          this.cookieService.delete( 'pokemon.session' );
        }
        else {
          this.socket.connect();
        }
        return d;
      });
    }
    else if ( this.getSession() ) {
      this.socket.connect();
    }

    setInterval( () => this.dummy.next( Date.now().toString()), 3000 );
  }
  
  setUserInfo( d ) {
    if ( debug ) { console.log( 'setuserinfo() before', this.user, 'incoming:', d ); }
    this.user.email = d.email;
    this.user.name = d.name;
    this.isLoggedIn = d.result;
    
    this.email.next( d.email );
    this.name.next( d.name );
    this.loggedIn.next( true );

    if ( debug ) { console.log( 'setuserinfo() after', this.user ); }
  }

  reset() {
    this.user.email = '';
    this.user.name = '';
    this.user.gameId = '';
    this.isLoggedIn = false;
    
    this.email.next( '' );
    this.name.next( '' );
    this.loggedIn.next( false );
    this.gameId.next( '' );

    this.socket.disconnect();
  }

  getSession() {
    return this.cookieService.get( 'pokemon.session' );
  }

  isAuth( a: string ) {
    if ( debug ) { console.log( 'isAuth() from', a, this.isLoggedIn); }
    return this.isLoggedIn;
  }


  sendCode( email: string ) {
    return this.http.post( 'api/login', { email } ); // add .pipe( CatchError(  our error handler ) );
  }

  // Could not figure out how to subscribe to two observables sequentially!!
  // so converted to promise for now.
  verifyCode( email, code ) {
    if ( debug ) { console.log( 'auth.service verifyCode()', email, code ); }
    let verify;
    return this.handleVerifyCode( email, code ).toPromise()
    .then( (v: any) => {
      if ( debug ) { console.log( 'verifyCode() handleVerifyCode()', v); }
      verify = v;
      if ( v.result ) { this.socket.connect(); }
      return this.getUserInfo().toPromise();
    })
    .then( user => {
      if ( debug ) { console.log( 'verifyCode() getUserINfo()', user ); }
      this.setUserInfo( user );
      return verify;
    });
  }

  getUserInfo() {
    if ( debug ) {  console.log( 'getUserInfo()', Date.now() ); }
    return this.http.get( 'api/user' );
  }

  handleVerifyCode( email, code ) {
    if ( debug ) { console.log( 'handleVerifyCode()', Date.now(), email, code ); }
    return this.http.post( 'api/login/verify', {
      email,
      code
    });
  }

  getCurrentUser() {
    if ( debug ) { console.log( 'authFactory getCurrentUser', this.user ); }
    if ( this.isLoggedIn ) { 
      return this.user;
    }
    else {
      this.router.navigate([ '/signin'] );
    }
  }

  logOut() {
    this.reset();
    this.cookieService.delete( 'pokemon.session' );
    this.router.navigate([ '/signin'] );
    this.socket.disconnect();
  }

  getGameId() {
    return this.user.gameId;
  }

  setGameId( id: string ) {
    this.user.gameId = id;
    this.gameId.next( id );
  }

  delGameId() {
    this.user.gameId = '';
    this.gameId.next( '' );
  }

}
