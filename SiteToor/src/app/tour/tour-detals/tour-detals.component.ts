import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../tour.model';

@Component({
  selector: 'app-tour-detals',
  templateUrl: './tour-detals.component.html',
  styleUrls: ['./tour-detals.component.css']
})
export class TourDetalsComponent implements OnInit {

@Input()
currentTour: Tour;

  constructor() { }

  ngOnInit() {
  }

}
