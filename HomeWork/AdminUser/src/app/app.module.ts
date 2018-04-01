import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Route, Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { DataUsersService } from './data-users.service';

const appRouts: Routes = [
{path: 'admin', component: AdminComponent},
{path: 'user', component: UserComponent},
{path: '', component: AdminComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [DataUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
