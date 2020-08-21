import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  private urlBase = 'http://localhost:1818/api';

  constructor(private httpClient: HttpClient) { }

  loginUser(usernameParam: string, passwordParam: string): Observable<User> {
    const loginUrl = `${this.urlBase}/login`;
    return this.httpClient.get<User>(loginUrl
      , {
        params: { username: usernameParam, password: passwordParam }
      });
  }
}

interface GetResponseLogin {
  _embedded: {
    user: User;
  }
}
