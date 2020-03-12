import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  msg ="welcome to world!";
 
  users:User[]=[];

  constructor(){
    let user1:User=new User('Harsh',21);
    let user2:User=new User('Abhi',22);
    this.users.push(user1);
    this.users.push(user2);
  }

}

export class User{
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  }
}
