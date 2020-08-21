import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username: String;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }
  logout() {
    this.router.navigate(['/login']);
  }

}
