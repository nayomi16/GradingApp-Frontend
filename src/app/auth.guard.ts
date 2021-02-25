import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {UserAuthService} from './services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private useraAuthService: UserAuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.useraAuthService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
