import { Injectable } from '@angular/core';

@Injectable()
export class DataUsersService {

  array =[];
  arreyUsers = [
    {
      name: 'user1'
    },
    {
      name: 'user2'
    },
    {
      name: 'user3'
    }
  ];

addUser(name: string, array: any){
  this.array.push({name});
};

deleteUser(nameDelete: string){
  let index = this.arreyUsers.indexOf(name);
  if(index){
    this.arreyUsers.slice(index);
    }
  };

  constructor() { }

}
