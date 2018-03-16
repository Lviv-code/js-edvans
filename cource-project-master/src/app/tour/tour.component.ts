import { Component, OnInit } from '@angular/core';
import { Tour } from './tour.model';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {


  tours: Tour[] = [new Tour("Europe Escape - 12 Days", "Some description", "Some city", "https://cdn.tourradar.com/s3/tour/original/14263_36f4f763.jpg", 200), 
  new Tour("Europe Jewel - 14 Days", "Some description", "Some city", "src", 200),
  new Tour("Some title3", "Some description", "Some city", "src", 200),
  new Tour("Some title4", "Some description", "Some city", "src", 200)];

  currentTour: Tour = new Tour("", "", "", "", "");

  isOpenDetails: boolean = false;
  constructor() { }


  ngOnInit() {
  }

  openTourDetails(tour) {
    this.currentTour = tour;
    this.isOpenDetails = true;
  }

}
