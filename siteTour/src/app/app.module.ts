import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BagComponent } from './bag/bag.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { TourComponent } from './tour/tour.component';
import { TourDetailsComponent } from './tour/tour-details/tour-details.component';
import { TourItemComponent } from './tour/tour-item/tour-item.component';
import { TourListComponent } from './tour/tour-list/tour-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BagComponent,
    HeaderComponent,
    LoginComponent,
    ProfileComponent,
    RegistrationComponent,
    TourComponent,
    TourDetailsComponent,
    TourItemComponent,
    TourListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
