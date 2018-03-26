import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent {
  title = 'app';
  switshAdminUser = true;

  switshAdmin(){
    this.switshAdminUser=true;
  }
  switshUser(){
    this.switshAdminUser = false;
  }

}
