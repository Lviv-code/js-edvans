import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { OddComponent } from './Game/odd/odd.component';
import { EvenComponent } from './Game/even/even.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
