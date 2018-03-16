import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BagComponent } from './bag/bag.component';
import { TourComponent } from './tour/tour.component';
import { ProfileComponent } from './profile/profile.component';
import { TourItemComponent } from './tour/tour-item/tour-item.component';
import { TourDetailsComponent } from './tour/tour-details/tour-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BagComponent,
    TourComponent,
    ProfileComponent,
    TourItemComponent,
    TourDetailsComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
