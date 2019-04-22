import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

const debug = false;

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  user = {
    email: '',
    name: '',
    gameId: -1
  };
  circleData = [ 
    {row: 225, col: 30, typeOfSpot: 'white', gifURL: '', class: 'saturn circle white' },
    {row: 350, col: 150, typeOfSpot: 'pink', gifURL: '', class: 'saturn circle pink' },
    {row: 105, col: 150, typeOfSpot: 'blue', gifURL: '', class: 'saturn circle blue' },
    {row: 225, col: 270, typeOfSpot: 'green', gifURL: '', class: 'saturn circle green' },
    {row: 165, col: 255, typeOfSpot: 'green', gifURL: '', class: 'saturn circle green' },
    {row: 120, col: 210, typeOfSpot: 'blue', gifURL: '', class: 'saturn circle blue' },
    {row: 330, col: 90, typeOfSpot: 'pink', gifURL: '', class: 'saturn circle pink' },
    {row: 285, col: 50, typeOfSpot: 'pink', gifURL: '', class: 'saturn circle pink' },
    {row: 285, col: 250, typeOfSpot: 'green', gifURL: '', class: 'saturn circle green' },
    {row: 330, col: 210, typeOfSpot: 'pink', gifURL: '', class: 'saturn circle pink' },
    {row: 120, col: 90, typeOfSpot: 'red', gifURL: '', class: 'saturn circle red' },
    {row: 163, col: 42, typeOfSpot: 'red', gifURL: '', class: 'saturn circle red' },
  ];
  users = [];
  winner;
  party = [];


  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService
  ) { 

  }

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

      if (this.user.gameId === -1) {
        this.router.navigate(['/home']);
        return;
      }
      else {
        this.initialize();
      }

    }
  }

  checkWinner = (pokemonCount) => {
    if (  pokemonCount.pink >= 4 && pokemonCount.green >= 3 &&
          pokemonCount.blue >= 2 && pokemonCount.red >= 2) {
      return true;
    } 
    else {
      return false;
    }
  }

  initialize = () => {
    this.userService.getUsers(this.user.gameId)
    .subscribe( (resp: any) => {
      this.users = resp;

      for ( const luser of this.users ) {
        if ( this.checkWinner( luser.pokemonCount)) {
          this.winner = luser;
          break;
        }
      }

      this.party = this.winner.party;
      this.circleData[0].gifURL = this.party.shift().gifURL;
      
      for (let i = 1; i < this.circleData.length; i++) {
        for (let j = 0; j < this.party.length; j++) {
          if (this.party[j].color === this.circleData[i].typeOfSpot) {
            this.circleData[i].gifURL = this.party[j].gifURL;
            this.party.splice(j, 1);
            break;
          }
        }
      }

    });
  }

  goHome = () => {
    this.router.navigate(['/home']).catch( console.error ) ;
  }

  printstate() {
    console.log( 'users', this.users );
    console.log( 'winner', this.winner );
    console.log( 'party', this.party );
    console.log( 'user', this.user );
    console.log( 'circleData', this.circleData );
  }

}
