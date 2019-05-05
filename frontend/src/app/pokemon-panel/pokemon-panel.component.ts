import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-panel',
  templateUrl: './pokemon-panel.component.html',
  styleUrls: ['./pokemon-panel.component.css']
})
export class PokemonPanelComponent implements OnInit {

  @Input() pokemon;

  @Input() showDice = false;

  @Input() small = false;

  constructor() { }

  ngOnInit() {
  }

}
