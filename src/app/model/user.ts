import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
    username: string;
    password: string;

    constructor(accountId: number, username:string, password:string) {
        this.username=username;
        this.password=password;
       }
}
