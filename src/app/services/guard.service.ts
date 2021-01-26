import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private authService : AuthenticationService, private router:  Router) { }


  canActivate()
  {
      if(this.authService.getStatus())
      {
       return true; 
      }
    this.router.navigate(['login']);
    return false;
  }
}
