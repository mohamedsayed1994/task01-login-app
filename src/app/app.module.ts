import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { JwtModule } from "@auth0/angular-jwt";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppLoginComponent } from './component/app-login/app-login.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:1818"],
        disallowedRoutes: ["http://localhost:1818/api/auth/singIn"],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
