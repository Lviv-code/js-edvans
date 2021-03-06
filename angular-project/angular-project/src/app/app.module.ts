import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FirstComponet } from './first-component/first.component';
import { SecondComponentComponent } from './second-component/second-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponet,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
