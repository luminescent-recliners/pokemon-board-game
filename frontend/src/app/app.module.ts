import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FlexLayoutModule } from '@angular/flex-layout';

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
import { AcknowledgeComponent } from './acknowledge/acknowledge.component';
import { DiceComponent } from './dice/dice.component';

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
    AcknowledgeComponent,
    DiceComponent,
    TesterComponent,  // dev
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
