import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../tour.model';

@Component({
  selector: 'app-tour-item',
  templateUrl: './tour-item.component.html',
  styleUrls: ['./tour-item.component.css']
})
export class TourItemComponent implements OnInit {


  @Input()
  tour: Tour;

  constructor() { }

  ngOnInit() {
  }

}
