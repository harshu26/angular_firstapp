import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  msg ="User details :";
 
  username:string="";

  users:User[]=[]; 

  constructor(){
    let user1:User=new User(1,'Harsh',21);
    let user2:User=new User(2,'Abhishek',22);
    let user3:User=new User(3,'Abhishek',22);
    this.users.push(user1);
    this.users.push(user2);
    this.users.push(user3);
  }
  LinkSrc="https://www.facebook.com/";

  arrayEven(){
    return this.users.length%2==0;
  }

  counter=0;
  increment(){
    this.counter++;
  }

  textValue=" ";
  inputValue(event){
    this.textValue=event.target.value
  }

  addUser(details:any){
    let id=details.id;
    let name=details.username;
    let age=details.age;
    let user=new User(id,name,age);
    this.users.push(user);
  }

  removeUser(id:number){
    let foundIndex=1;
    for(let i=0;i<this.users.length;i++){
      let user=this.users[i];
      if(user.id==id){
        foundIndex=i;
        break;
      }
    }
    if(foundIndex<0)
      return;
    this.users.splice(foundIndex,1);  
  }
}


export class User{
  id:number;
  name:string;
  age:number;

  constructor(id:number,name:string,age:number){
    this.id=id;
    this.name=name;
    this.age=age;
  }
}