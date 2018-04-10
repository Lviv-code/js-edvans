import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  news =[];
  
  constructor(private mainService: MainService){
this.mainService.getNews().subscribe(data => {
  console.log(data);
  this.news=data.articles;
});
  }
}
