import { NgModule } from '@angular/core';
import { GameAppRoutingModule } from './game-app-routing.module';
// import { GameComponent } from '../game/game.component';
import { BoardComponent } from './board/board.component';
import { CityComponent } from './city/city.component';
import { EventComponent } from './event/event.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ResumeLobbyComponent } from './resume-lobby/resume-lobby.component';
import { StarterPokemonComponent } from './starter-pokemon/starter-pokemon.component';
import { CapturePokemonComponent } from './capture-pokemon/capture-pokemon.component';
import { TrainerComponent } from './trainer/trainer.component';
import { WinnerComponent } from './winner/winner.component';

import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [
    // GameComponent,
    BoardComponent,
    CityComponent,
    EventComponent,
    LobbyComponent,
    ResumeLobbyComponent,
    StarterPokemonComponent,
    CapturePokemonComponent,
    TrainerComponent,
    WinnerComponent,
  ],
  imports: [
    GameAppRoutingModule,
    SharedComponentsModule
  ]
})
export class GameAppModule { }
