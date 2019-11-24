import { Injectable } from '@angular/core';

@Injectable ({
  providedIn: 'root'
})

export class LogService {

  isLoggedin = false;

    login() {
        this.isLoggedin = true;
    }

    logout() {
        this.isLoggedin = false;
    }

}
