import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour.model';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  tours: Tour[] = [new Tour('Some title', 'description', 'city', 'src', 220), new Tour('Some title', 'description', 'city', 'src', 220) ];
  isShowDetails = false;
  openDetails() {
this.isShowDetails = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
