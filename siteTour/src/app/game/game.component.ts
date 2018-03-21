import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() intervalFire = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFire.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }
  onPuseGame(){
    clearInterval(this.interval);
  }

}
