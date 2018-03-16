import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../tour.model';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  @Input()
  currentTour: Tour;
  constructor() { }

  ngOnInit() {
  }

  
}
