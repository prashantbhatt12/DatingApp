import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  title = 'client'
  users:any;
  ngOnInit():void{
    //this.getUsers();
    this.setCurrentUser();
  }
  setCurrentUser(){
    const user:User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
  // getUsers(){
  //   this.http.get<{id:string,name:string}>("https://localhost:5001/api/users").subscribe(response =>{
  //     this.users = response;
  //   }, error=>{
  //     console.log(error);
  //   });
  // }
  constructor( private accountService:AccountService){}
}