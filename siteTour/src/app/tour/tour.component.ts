import { Component, OnInit } from '@angular/core';
import { Tour } from './tour.model';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  tours: Tour[] = [new Tour('Some title1', 'description', 'city', 'src', 200),
  new Tour('Some title2', 'description', 'city', 'src', 200),
  new Tour('Some title3', 'description', 'city', 'src', 220),
  new Tour('Some title4', 'description', 'city', 'src', 220) ];

  currentTour: Tour = new Tour('', '', '', '', '');
  isOpenDetails = false;

  constructor() { }

  ngOnInit() {
  }
  openTourDetails(tour) {
this.currentTour = tour;
this.isOpenDetails = true;
  }
}
