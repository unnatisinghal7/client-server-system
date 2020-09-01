import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ClientlistService } from './clientlist.service';
import { stringify } from '@angular/core/src/util';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
clientList:any[]=[];
flag:boolean;
deregisterclients:string[]=[];

  constructor(private fb:FormBuilder,private clientService:ClientlistService,private router:Router) {
  //  console.log(this.clientList);
   }

  ngOnInit() {
this.registerForm=this.fb.group({
ipaddress:['',[Validators.required,validateIp]],
description:['',Validators.required]

})
this.getClient();
  }
  toggle(){
    this.flag=!this.flag;

  }
  register()
  {// console.log(this.registerForm.value)
    //console.log("hi1");
   // console.log(this.clientList);
    this.flag=!this.flag
    this.clientService.addClient(this.registerForm.value).subscribe(
     
      response=>{  this.getClient()
  
     }
    
    )
    Swal.fire('', 'Successfully Registered', 'success');
   //  console.log("hi2");
    this.registerForm.reset();
     }
     deregister(clientip)
     {  
      // console.log(this.deregisterclients);
       if(this.deregisterclients.indexOf(clientip)>-1)
       {
         this.deregisterclients.splice(this.deregisterclients.indexOf(clientip),1)

       }
       else{
      // console.log(clientip)
this.deregisterclients.push(clientip);

       }
      // console.log(this.deregisterclients);
     }
     
      deregister1()
      {
        Swal.fire({
          title: 'Do you want to de-register?',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          showLoaderOnConfirm: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          icon: 'warning',
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          if (result.value) {
          //  console.log("deregister1");
            this.clientService.deregister(this.deregisterclients).subscribe(
              response=>{this.getClient();
                
                this.deregisterclients=[];}              
               
            )
          }
          
         
        })
        
      
        // Swal.fire('Yay!!', 'Registration successful', 'success');
      }
      
     
      
       
  
  getClient(){
   // console.log("hi3");
    this.clientService.getClient().subscribe(
      response=>{
        this.clientList=response;
        
       
      }
    )
    
  }
  back()
  {
    this.router.navigate(['x']);
  }
  
}
   function validateIp(c:FormControl)
   {
     let ip:string;
     let count:number;
     let special:number=0;
     count=0;
ip=c.value+"";
let x:string[];
x=ip.split(".");
if(ip!="0.0.0.0" && ip!="100.64.0.0"  && ip!="192.0.0.0" && ip!="192.88.99.0" && ip!="198.18.0.0" && ip!="198.51.100.0" && ip!="203.0.113.0" && ip!="224.0.0.0" && ip!="240.0.0.0" && ip!="255.255.255.255" && ip!="0.0.0.0" && x[3]!="255" && x[3]!="0" && x[0]!="127")
{
  special=1;
}
for(let i=0;i<x.length;i++)
 {
  if(Number(x[i])>=0 && Number(x[i])<=255 && x[i]!="" )
   {
   count++;
   }
//  }f
   }
   if(count==4 && x.length==4 && special==1)
   {
     return null;
   }
   else{
     return  {ipaddressError: {
      message:true}
};
   
   
  
}
   }
  //  function validateIp1(c:FormControl)
  //  {

  //  }
  // {
  //   console.log(RegisterComponent.)
    // console.log("111111");
    // let count=0;
    //  let ip:string;
    //  ip==c.value+"";
    // console.log(ip);
     
    // if(ip.includes("."))
    // {
    //  let x=ip.split(".");
    //  for(let i=0;i<x.length;i++)
    //  {
    //    if(Number(x[i])>=0 && Number(x[i])<=255)
    //    {
    //      count++;
    //    }
    //  }
    
    //  console.log(count);
    //  if(count==x.length)
    //  {
    //    return null;
    //  }
    //  else{
    //    ipError:{
    //      message:"Please provide valid IP address"
    //    }
    //  }
    

  

  
  


