import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ClientLoginService } from './client-login.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  errorMessage:string;
  list:any;
  ipList:string[]=[];

  constructor(private clientService:ClientLoginService ) { }

  ngOnInit() {
  
  }
  getClient(){
    this.clientService.readClient().subscribe(
      response=>{ this.list=response;}
    )
  }
  changeSelect(ipadd:string ){
      console.log(ipadd+ 'removed');
      console.log(this.ipList);
      let index=this.ipList.indexOf(ipadd);
      if(index>-1){
        this.ipList.splice(index,1);
        console.log(this.ipList);
      }
      else {
        this.ipList.push(ipadd);
        console.log(this.ipList);
        
      }
        
    }
}
