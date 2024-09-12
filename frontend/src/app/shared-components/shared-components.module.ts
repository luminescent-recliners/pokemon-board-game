import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { DiceComponent } from './dice/dice.component';
import { PlayerPanelComponent } from './player-panel/player-panel.component';
import { PokemonPanelComponent } from './pokemon-panel/pokemon-panel.component';

@NgModule({
  declarations: [
    DiceComponent,
    PlayerPanelComponent,
    PokemonPanelComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    DiceComponent,
    PlayerPanelComponent,
    PokemonPanelComponent,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
  ]
})
export class SharedComponentsModule { }
