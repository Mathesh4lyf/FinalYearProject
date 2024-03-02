import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthGurdService implements CanActivate{
  constructor( public router: Router) {}  canActivate(): boolean {
   let response:boolean;
  if (sessionStorage.getItem('auth')==="Yes") {
    
    response=true;
  }else{
    response=false
    this.router.navigate(['auth'])
    // response=true
  }
    return response;
  }
  

}