import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  userName: string;
  token: string;
  roles: string;
  status: string;
  constructor() { }
}
