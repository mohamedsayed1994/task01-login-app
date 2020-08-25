import { EncryptServiceService } from './../services/EncryptService.service';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
//import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: any;
  private urlBase = 'http://localhost:1818/api/auth/singIn';

  constructor(private http: HttpClient, private router: Router,
    private rsaEncry: EncryptServiceService) {
  }

  login(usernameParam: string, passwordParam: string): Observable<User> {
    // const encryptUser = this.rsaEncry.encrypt(usernameParam);
    // const encryptPass = this.rsaEncry.encrypt(passwordParam);

    console.log('service==> usernameParam ' + usernameParam + ' passwordParam ' + passwordParam);
    // console.log('service==> encryptUser ' + encryptUser + ' encryptPass ' + encryptPass);
    // console.log('service==> encryptPass ' + encryptPass);
    // {     params: { username: usernameParam, password: passwordParam }
    console.log(this.urlBase + `?username=${usernameParam}&password=${passwordParam}`);
    return this.http.post<User>(this.urlBase + `?username=${usernameParam}&password=${passwordParam}`, null)
      .pipe(map(user => {
        console.log('2-service==> username ' + user.userName);
        console.log('2-service==> token ' + user.token);
        console.log('2-service==> status: ' + user.status);
        localStorage.setItem('username', user.userName);
        localStorage.setItem('token', user.token);
        localStorage.setItem('roles', user.roles);
        localStorage.setItem('status', user.status);
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