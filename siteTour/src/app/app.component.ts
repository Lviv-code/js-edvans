import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber: number[] = [];
evenNumber: number[] = [];

onIntervalFired(fireNumber: number){
  if(fireNumber % 2 === 0){
    this.evenNumber.push(fireNumber);
  } else {
    this.oddNumber.push(fireNumber);
  }
}
}
