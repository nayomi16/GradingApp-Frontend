import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {UserAuthService} from './user-auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private userAuthService: UserAuthService) { }


  intercept(req, next) {
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userAuthService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}
