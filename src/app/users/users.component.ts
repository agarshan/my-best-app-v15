import { Component } from '@angular/core';

@Component({
  selector: '.app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  /* 
  
  templateUrl - we have mention the path of the url
  template - we have to write the html there it self `` - can be used for multiple line
  */

  allowNewUser = true;
  userOnline: string;
  users = ['user1','user2']

  constructor() {
    // this.isUserAllowed();

    this.userOnline = 'online';
  }

  changeUserCreatedStatus(){
    this.users.push()
  }

  isUserAllowed() {
    setTimeout(() => {
      this.allowNewUser = !this.allowNewUser;
      // this.isUserAllowed();
    }, 2000);
  }
}
