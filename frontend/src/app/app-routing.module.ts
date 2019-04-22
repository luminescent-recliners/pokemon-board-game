import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { SigninComponent } from './signin/signin.component';
import { CityComponent } from './city/city.component';
import { EventComponent } from './event/event.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ResumeLobbyComponent } from './resume-lobby/resume-lobby.component';
import { StarterPokemonComponent } from './starter-pokemon/starter-pokemon.component';
import { CapturePokemonComponent } from './capture-pokemon/capture-pokemon.component';
import { TrainerComponent } from './trainer/trainer.component';
import { WinnerComponent } from './winner/winner.component';
import { TesterComponent } from './tester/tester.component';

const dev = false;

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'board', component: BoardComponent  },
  { path: 'starter', component: StarterPokemonComponent  },
  { path: 'lobby', component: LobbyComponent  },
  { path: 'capture', component: CapturePokemonComponent  },
  { path: 'city', component: CityComponent  },
  { path: 'event', component: EventComponent  },
  { path: 'winner', component: WinnerComponent  },
  { path: 'signin', component: SigninComponent  },
  { path: 'trainer', component: TrainerComponent  },
  { path: 'resumelobby', component: ResumeLobbyComponent  },
];

if ( dev ) { routes.push( { path: 'tester', component: TesterComponent } ); }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
