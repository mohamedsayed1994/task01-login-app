import { AuthenticationService } from './../../APIs/Authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username: String;
  token: String;
  
  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.token = localStorage.getItem('token');
    console.log('welcome ==> token' + this.token)
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/appLogin']);
  }
}
