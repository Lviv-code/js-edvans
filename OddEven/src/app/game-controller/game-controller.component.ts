import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  constructor() { 

  }
  odd = [];
  even = [];
  triger: any;
  item: number = 0;
  switcher: boolean = false;
  startCount(){
    this.item++;
    this.item%2 == 0? this.even.push(this.item): this.odd.push(this.item) ;    
  };

  ngOnInit() {
  }

  startAdd(){  
    if(this.switcher == false){
      this.triger = setInterval(() => {
        this.startCount(); 
      }, 1000);
      this.switcher = true;
    }    
  }

  stopAdd(){
    if(this.switcher == true){
      clearInterval(this.triger);  
      this.switcher = false;  
    };
  }    
}
