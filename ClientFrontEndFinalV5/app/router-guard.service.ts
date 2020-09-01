import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate{

  constructor(private router:Router ) { }
  canActivate():boolean{
    if(sessionStorage.getItem('isLoggedIn')=='true'){
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
