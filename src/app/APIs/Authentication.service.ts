import { EncryptServiceService } from './../services/EncryptService.service';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
//import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: any;
  private urlBase = 'http://localhost:1818/api/auth/singIn';

  helper = new JwtHelperService();
  private decodedToken;
  private expirationDate;
  private isExpired;
  constructor(private http: HttpClient, private router: Router,
    private rsaEncry: EncryptServiceService) {
  }

  login(usernameParam: string, passwordParam: string): Observable<User> {
    const username = this.rsaEncry.encrypt(usernameParam);
    const password = this.rsaEncry.encrypt(passwordParam);

    console.log('service==> usernameParam ' + usernameParam + ' passwordParam ' + passwordParam);
    console.log('service==> encryptUser ' + username);
    console.log('service==> encryptPass ' + password);

    //this.http.post<User>(this.urlBase + `?username=${usernameParam}&password=${passwordParam}`, null)
    return this.http.post<User>(this.urlBase, { username, password })
      .pipe(map(user => {
        console.log('2-service==> username ' + user.userName);
        console.log('2-service==> token ' + user.token);
        console.log('2-service==> status: ' + user.status);
        localStorage.setItem('username', user.userName);
        localStorage.setItem('token', user.token);
        localStorage.setItem('roles', user.roles);
        localStorage.setItem('status', user.status);
        this.decodedToken = this.helper.decodeToken(user.token);
        this.expirationDate = this.helper.getTokenExpirationDate(user.token);
        this.isExpired = this.helper.isTokenExpired(user.token);
        
        console.log('decodedToken: ' + this.decodedToken);
        console.log('expirationDate: ' + this.expirationDate);
        console.log('isExpired: ' + this.isExpired);
        //this.setSession(user);
        return user;
      }
      ));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('status');
  }

  getToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const JWTResponse = currentUser['user']
    const token = JWTResponse['token'];
    return token;
  }
}