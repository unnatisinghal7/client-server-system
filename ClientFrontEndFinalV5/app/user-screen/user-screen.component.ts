import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserScreenService } from './user-screen.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {
  newList:any[]=[];
  anotherList:any[]=[];
  alert_val:boolean;
  constructor(private router:Router, private userScreenService: UserScreenService) { }

  interval: any;
  ngOnInit() {
    this.getMessage();
    this.interval=setInterval(
      ()=>{ this.getMessage(); }, 2000);
  }
  alert(){
    this.alert_val=false;
  }

  logout_func(){
    console.log("Logged out");
    sessionStorage.setItem("isLoggedIn",'false');
    this.router.navigate(['logout']);
    
  }

  setStatus(dt)
    {
      dt.show=false; 
      console.log(dt.show)
    }

  new_message(){return true}

  getMessage(){
    this.anotherList=this.newList;
    this.userScreenService.getMessage().subscribe(
      response => {
        this.alert_val=true;
        this.newList=response.reverse();
        console.log(this.newList);
      }
    );
  }

  deleteMessage(message){
    this.userScreenService.deleteMessage(message).subscribe(
      (response) =>{
        console.log(response);
        console.log("on delete");
      }
    );
    this.ngOnInit();
  }
}


