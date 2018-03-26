import { Component, OnInit } from '@angular/core';
import { DataUsersService } from '../data-users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css'],
  providers: [DataUsersService]
})
export class UserComponent implements OnInit {
  users = [];

  constructor(private data: DataUsersService) { }

  ngOnInit() {
    this.users =this.data.arreyUsers;
  }

}
