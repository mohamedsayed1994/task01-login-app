import { AuthenticationService } from './../../APIs/Authentication.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  pageTitle: any = this.activatedRoute.snapshot.data.title;
  user: User = new User();
  //loginForm: FormGroup;
  hide = true;
  loginErrMes: boolean = false;

  constructor(private authnservice: AuthenticationService,
    //private title: Title,
    //private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.title.setTitle(this.pageTitle);

    // this.loginForm = this.fb.group({
    //   'email': [this.user.email, [Validators.required, Validators.email]],
    //   'password': [this.user.password, [Validators.required]],
    // });
  }

  //get f() { return this.loginForm.controls; }

  onLoginSubmit(username: string, password: string) {
    console.log('start login...');
    this.authnservice.login(username, password)
      //.pipe(first())
      .subscribe(
        data => {
          console.log('data=> ' + data.userName);
          console.log('localStorage.getItem(status)=>' + localStorage.getItem('status'));
          if (localStorage.getItem('status') == 'INVALID_CREDENTIALS') {
            this.loginErrMes = true;
            console.log('=> app-login -> in invalid if error');
          } else {
            console.log('=> app-login -> in else navigation');
            this.loginErrMes = false;
            this.router.navigate(['/welcome']);
          }

        },
        error => {
          console.log('=> app-login -> in error block' + error);
          this.loginErrMes = true;
        }
      );
  }

  // getEmailErrorMessage() {
  //   return this.f.email.hasError('required') ? 'You must enter a email' :
  //     this.f.email.hasError('email') ? 'Not a valid email' : '';
  // }

  // getPasswordErrorMessage() {
  //   return this.f.password.hasError('required') ? 'You must enter a password' : '';
  // }


}
