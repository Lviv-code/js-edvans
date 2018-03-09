import { Component } from "@angular/core";

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
export class FirstComponet {
    name: string = "Volodymyr";
    age:  number = 35;
    country: string = "Ukraine";
    city: string = "Lviv";
    
    editName(event) {
        console.log(event.target.value)
    };
    value: string = "Hellow";
    isShow: boolean = true;
    onClockButton(){
this.isShow = !this.isShow;
    }
}