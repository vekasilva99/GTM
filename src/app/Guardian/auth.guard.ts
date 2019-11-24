import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LogService } from '../Services/log/log.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private logservice: LogService, private router: Router) {}

  canActivate(): boolean {

      if (this.logservice.isLoggedin) {
        // if we return true user is allowed to access that route
        return true;
    } else {
        // if we return false user is not allowed to access
        alert('Primero debes iniciar sesión');
        this.router.navigate(['login']);
        console.log('epa');
        return false;
    }
  }
}
