import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeserver',
  templateUrl: './homeserver.component.html',
  styleUrls: ['./homeserver.component.css']
})
export class HomeserverComponent implements OnInit {
  
  route:string;
//   constructor(private router:Router)
//  {}
  constructor(location:Location,router:Router) {router.events.subscribe(
    val=>{
      if(location.path()!="")
      {
        this.route=location.path();
      }
      else{
        this.route="home"
      }
    }
  ) }
  

  ngOnInit() {
  //  console.log(this.route)
  }
  // fun1()
  // {
  //   console.log(this.route)
  //   this.router.navigate(['register']);
  //   console.log(this.route)
  // }0
  // func2()
  // {
  //   this.router.navigate(['message'])
  // }

 
}
