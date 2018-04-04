import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer.model';
import { ManageSevice } from '../../services/manage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

  employers: Employer [] = [];

  constructor(private manageService: ManageSevice, private router: Router) { }
user: Employer = new Employer("",  "", "", "");
loginUser: Employer = new Employer("",  "", "", "");
  ngOnInit() {
    this.employers = this.manageService.getEmployers();
  }

  goToManage() {
    this.router.navigate(['/manage'])

  }
  signUp(){
    this.manageService.signUpNewUser(this.user).subscribe(
      res =>{
        console.log(res);
      },
      err=>{
        console.log("Some Error");
      }
    )
  }

  login(){
let cradentils ={
  email: this.loginUser.email,
  password: this.loginUser.password
}
this.manageService.loginUser(cradentils).subscribe(
  res =>{
    let token = res.json().token;
    localStorage.setItem("token", token);
  },
  err=>{
    console.log("Some Error");
  }
)
  }
}
