import { Component, OnInit } from '@angular/core';
import { DataUsersService } from '../data-users.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css'],
  providers: [DataUsersService]
})
export class AdminComponent implements OnInit {

  users =[];
  textUserAdd = '';
  textUserDelete='';
  constructor(private data: DataUsersService) { }

  ngOnInit() {
    this.users =this.data.arreyUsers;
    
  }
  addUserAdmin(textUserAdd, users){
    this.data.addUser(textUserAdd, users);
  };
  deleteUserAdmin(textUserDelete){
    this.data.deleteUser(textUserDelete);

  }


}
