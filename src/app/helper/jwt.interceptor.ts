import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../APIs/Authentication.service';
import { tap } from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //     // add authorization header with jwt token if available
        //     const currentUserValue = this.authenticationService.currentUserValue;
        //     console.log('** interceptors currentUserValue ' + currentUserValue);
        //     if (currentUserValue) {
        //         console.log('** interceptors inside if  ');
        //         request = request.clone({
        //             setHeaders: {
        //                 Authorization: `Bearer ${this.authenticationService.getToken()}`
        //             }
        //         });
        //     }
        //     return next.handle(request);
        return null;
    }

    interceptLoginDataService(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        //const currentUserValue = this.loginDataService.currentUserValue;
        // console.log('** interceptLoginDataService currentUserValue ' + currentUserValue);
        // if (currentUserValue) {
        //     console.log('** interceptLoginDataService inside if  ');
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Bearer ${localStorage.getItem('token')}`
        //         }
        //     });            
        // }
        // return next.handle(request);
        return null;
    }
}