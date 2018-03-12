import { Component, OnInit } from '@angular/core';
import {Tour} from './tour.model';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  tour: Tour[] = [new Tour('Some title', 'description', 'city', 'src', 220), new Tour('Some title', 'description', 'city', 'src', 220)];

  constructor() { }

  ngOnInit() {
  }

}
