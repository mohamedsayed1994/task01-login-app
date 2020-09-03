import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task01-login-app';
  constructor(public jwtHelper: JwtHelperService,) {
    console.log('------> app.ts-getTokenExpirationDate: ' + this.jwtHelper.getTokenExpirationDate(localStorage.getItem('token'))); // date
    console.log('------> app.ts-isTokenExpired: ' + this.jwtHelper.isTokenExpired(localStorage.getItem('token'))); // true or false    
  }
}
