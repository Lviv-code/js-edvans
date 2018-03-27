import { Injectable } from '@angular/core';

@Injectable()
export class DataUsersService {
  constructor() { }

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

addUser(nameData: string){
  this.arreyUsers.push({name: nameData});
};

deleteUser(name: string){
  let n = null;
  this.arreyUsers.forEach(function(item, i, arr) {
    if(item.name === name) n=i;
  });
  if(n != null)
  this.arreyUsers.splice(n, 1);
  };
}
