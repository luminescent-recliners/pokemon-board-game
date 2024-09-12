import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { CityComponent } from './city/city.component';
import { EventComponent } from './event/event.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ResumeLobbyComponent } from './resume-lobby/resume-lobby.component';
import { StarterPokemonComponent } from './starter-pokemon/starter-pokemon.component';
import { CapturePokemonComponent } from './capture-pokemon/capture-pokemon.component';
import { TrainerComponent } from './trainer/trainer.component';
import { WinnerComponent } from './winner/winner.component';

const routes: Routes = [

  { path: ':gameId/lobby', component: LobbyComponent  },
  { path: ':gameId/resumelobby', component: ResumeLobbyComponent  },
  { path: ':gameId/board', component: BoardComponent  },
  { path: ':gameId/starter', component: StarterPokemonComponent  },
  { path: ':gameId/capture', component: CapturePokemonComponent  },
  { path: ':gameId/city', component: CityComponent  },
  { path: ':gameId/event', component: EventComponent  },
  { path: ':gameId/trainer', component: TrainerComponent  },
  { path: ':gameId/winner', component: WinnerComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameAppRoutingModule { }
