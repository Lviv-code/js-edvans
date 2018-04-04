import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer.model';
import { ManageSevice } from '../../services/manage.service';

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css']
})
export class ManagmentComponent implements OnInit {

  emloyers: Employer [] = [];
  name: string;
  sallary: number;
  constructor(private managetService: ManageSevice) { }

  ngOnInit() {
    this.emloyers = this.managetService.getEmployers();
    console.log(this.emloyers);
  }

  // addNewEmployer() {
  //   let employer = new Employer(this.name, this.sallary);
  //   this.managetService.addEployer(employer);
  // }

  deleteEmployer(employer: Employer){
    let i =this.emloyers.indexOf(employer);
    if(i>-1) this.emloyers.slice(i, 1);
  }

}
