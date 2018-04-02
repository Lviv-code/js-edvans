import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription, Observer } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  customObserveble: Subscription;
  secondObserveble2: Subscription;
  
  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(1000);
    this.customObserveble = myNumber.subscribe(
      (number: number)=>{
        console.log(number);
      }
    )  
  const secondObserveble = Observable.create((observer: Observer<string>) =>{
    setTimeout(()=>{
      observer.next("first string")
    }, 2000);
    setTimeout(()=>{
      observer.next("second string")
    }, 4000);
  })
 

 this.secondObserveble2 = secondObserveble.subscribe(
    (data: string)=>{
      console.log(data);
    }
  )
}
  ngOnDestroy(){
this.customObserveble.unsubscribe();
this.secondObserveble2.unsubscribe();
  }

}
