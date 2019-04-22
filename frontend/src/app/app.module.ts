import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { BoardComponent } from './board/board.component';
import { CityComponent } from './city/city.component';
import { EventComponent } from './event/event.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ResumeLobbyComponent } from './resume-lobby/resume-lobby.component';
import { StarterPokemonComponent } from './starter-pokemon/starter-pokemon.component';
import { CapturePokemonComponent } from './capture-pokemon/capture-pokemon.component';
import { TrainerComponent } from './trainer/trainer.component';
import { WinnerComponent } from './winner/winner.component';
import { TesterComponent } from './tester/tester.component';
import { SvgDDirective } from './svg-d.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    BoardComponent,
    CityComponent,
    EventComponent,
    LobbyComponent,
    ResumeLobbyComponent,
    StarterPokemonComponent,
    CapturePokemonComponent,
    TrainerComponent,
    WinnerComponent,
    TesterComponent, // dev
    SvgDDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
