import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userName:string;
  pass:string;
  popup:boolean=true;
  constructor(private formBuilder: FormBuilder,private router:Router) { }
  count:number=2;
  val:boolean=false;

  ngOnInit() {

    if(sessionStorage.getItem('isLoggedIn')!=null){
      sessionStorage.clear();

    }
    // alert("You have " +this.count + " new messages. Click ok to login")
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      pass: ['', Validators.required],
 });
  }
  verify(){
    sessionStorage.setItem("isLoggedIn",'true');
    if(this.userName=="admin" && this.pass=="admin"){
      this.router.navigate(['userscreen']);
    }
    else
    {this.val=true;}
    
  }

  // 
  
}
