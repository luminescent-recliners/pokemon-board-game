import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css'],
  
})
export class DiceComponent implements OnInit, OnChanges {

  private pipsInternal = 1;

  @Input() set pips( p: number ) {
    if ( p < 1 || p > 6 ) {
      this.pipsInternal =  Math.ceil( Math.random() * 6 );  
    }
    else {
      this.pipsInternal = p;
    }
    // this.rolled.emit( this.pipsInternal );
  }

  @Input() roll: number;

  @Output() rolled = new EventEmitter< number >();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges( changes ) {
    if ( changes.roll && changes.roll.previousValue !== undefined ) {
      this.rollDice();
    }
  }

  private animateRoll( n ) {
    return new Promise<number>( resolve => {
      setTimeout( () => resolve(n), 50 );
    });  
  }

  async rollDice() {
    try {
      const audioDice = new Audio('../../assets/sounds/dice.mp3');
      audioDice.play();
    }
    catch ( e ) {
      console.error( 'couldnot play sound', e );
    }
    for ( let i = 0; i < 30; i++ ) {
      this.pipsInternal = await this.animateRoll( (i % 6) + 1 );
    }
    this.pipsInternal = Math.ceil(Math.random() * 6 );
    this.rolled.emit( this.pipsInternal );
  }

}
