import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

import { AcknowledgeComponent } from './acknowledge/acknowledge.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { GameComponent } from './game/game.component';

import { TesterComponent } from './tester/tester.component';

const dev = false;

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },

  { path: 'signin', component: SigninComponent  },
  { path: 'acknowldedge', component: AcknowledgeComponent },
  { path: 'pokedex', component: PokedexComponent },
  
  // loggedin
  { path: 'home', component: HomeComponent  },
  { path: 'game', component: GameComponent, loadChildren: './game-app/game-app.module#GameAppModule'  },
  
];

if ( dev ) { routes.push( { path: 'tester', component: TesterComponent } ); }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
