import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup, FormArray } from  '@angular/forms';
import { MessageService } from './message.service';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
messageForm:FormGroup;
optionValue:string;
k:string;
ipaddress:string;
unicastList:any[]=[];
multicastList:any[]=[];
broadcastList:any[]=[];
registeredClients:any[]=[];
deregisterclients:any[]=[];
  constructor(private fb:FormBuilder ,private service :MessageService,private router:Router) { }

  ngOnInit() {
    this.messageForm=this.fb.group({
mode:['',Validators.required],


message:['',Validators.required]
    })
    //console.log(this.messageForm.controls.clients);
    
  this.getClient();
  //console.log(this.registeredClients);
  //console.log("111");
  
  }

  getClient(){
    //console.log("hi5");
    this.service.getClient().subscribe(
      response=>{
        this.registeredClients=response;
        
       
      }
    )
    //console.log(this.registeredClients);
    
  }
  // openPopup(){
  //   this.popup=true;
  // }
  // closePopup(){
  //   this.popup=false;
  // }
  
  unicastSubmit()
  {
    let pattern:string;
     let y:string;
    y=this.messageForm.controls.message.value+"";
     pattern=this.unicastList[0]+",&"+y;
    // console.log(pattern);
  //  console.log(this.ipaddress);
    this.service.sendMessage(pattern).subscribe(
      response=>{
        console.log("Unicast Submit ",response);
        this.messageForm.controls.mode=null;
        Swal.fire({
          title: 'Messsage sent Successfully',
          showCancelButton: false,
          confirmButtonText: 'OK',
          showLoaderOnConfirm: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          icon: 'success',
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          if (result.value) {
           location.reload();
          }
          
         
        }) 
        //console.log( this.messageForm.controls.message);
      }
    )
   //this.openPopup();
    //this.router.navigate(["register"]);
    //this.messageForm.reset();
    
   // this.messageForm=null;
  //  Swal.fire('Yay!!', 'Message sent successfully', 'success');
  // location.reload();
  
   //this.optionValue="";
   //document.getElementById("ki").setAttribute("value","");
    
  }

   multicastClick(ipaddress)
     {
       
       if( this.multicastList.indexOf(ipaddress)>-1){
         this.multicastList.splice(this.multicastList.indexOf(ipaddress),1);
         
       }
       else{
          this.multicastList.push(ipaddress);

       }
       //console.log("Multicast list",this.multicastList)
       

}
broadcastSubmit()
{
  for(var i=0;i<this.registeredClients.length;i++)
  {
    this.broadcastList[i]=this.registeredClients[i].ipaddress;
  }
 
 // console.log(this.broadcastList);
  let pattern:string;
  let y:string;
  let z:string="";
//  console.log(this.broadcastList)
  y=this.messageForm.controls.message.value+"";
  for(var i =0;i<this.broadcastList.length;i++)
  {
    z=z+this.broadcastList[i]+",";
  }
  z=z.substring(0,z.length);
  pattern=z+"&"+y;
 // console.log(pattern);
  this.service.sendMessage(pattern).subscribe(
    response=>{
    //  console.log(response);
      Swal.fire({
        title: 'Messsage sent Successfully',
        showCancelButton: false,
        confirmButtonText: 'OK',
        showLoaderOnConfirm: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        icon: 'success',
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.value) {
         location.reload();
        }
        
       
      }) 
      
    }
  )
  // Swal.fire('Yay!!', 'Message sent successfully', 'success');
  
  
  // location.reload();
  //this.ngOnInit();
}
multicastSubmit()
  {
    let pattern:string;
    let y:string;
    let z:string="";
  //  console.log(this.multicastList)
    y=this.messageForm.controls.message.value+"";
    for(var i =0;i<this.multicastList.length;i++)
    {
      z=z+this.multicastList[i]+",";
    }
    z=z.substring(0,z.length);
    pattern=z+"&"+y;
    //console.log(pattern);
    this.service.sendMessage(pattern).subscribe(
      response=>{
      //  console.log(response);
        Swal.fire({
          title: 'Messsage sent Successfully',
          showCancelButton: false,
          confirmButtonText: 'OK',
          showLoaderOnConfirm: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          icon: 'success',
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          if (result.value) {
           location.reload();
          }
          
         
        }) 
      }
    )
    // Swal.fire('Yay!!', 'Message sent successfully', 'success');
    // location.reload();
    //this.ngOnInit();
    
  }
  unicastClick(ipaddress)
  {
    // this.deregisterclients=[];
    // this.deregisterclients.push(ip);
    // console.log(this.deregisterclients);
    this.unicastList=[];
    this.unicastList.push(ipaddress);
   // console.log("Unicast List :",this.unicastList);

  }
  emptylist()
  {
   
    this.multicastList=[];
   // console.log("1111");
  }
  image()
  {
    for(var i=0;i<this.registeredClients.length;i++)
  {
    this.broadcastList[i]=this.registeredClients[i].ipaddress;
  }
 
   // console.log(this.broadcastList);
  let pattern:string;
  let y:string;
  let z:string="";
 // console.log(this.broadcastList)
  y="IT IS AN EMERGENCY MESSAGE, PLEASE CHECK YOUR SYSTEM!!!";
  for(var i =0;i<this.broadcastList.length;i++)
  {
    z=z+this.broadcastList[i]+",";
  }
  z=z.substring(0,z.length);
  pattern=z+"&"+y;
 // console.log(pattern);
  this.service.sendMessage(pattern).subscribe(
    response=>{
    //  console.log(response);
    }
  )
  //this.ngOnInit();
  Swal.fire('Yay!!', ' SOS Message sent successfully', 'success');
  
  // location.reload();
  }
  back()
  {
    this.router.navigate(['x']);
  }
}
