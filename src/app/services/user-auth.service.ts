import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ResponseDto} from '../dto/response-dto';
import {TOKEN_KEY} from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private URL = 'http://localhost:5000/user';

  constructor(private http: HttpClient) { }

  signInUser(user): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL + '/login', user);
  }

  getToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  }
  // logout() {
  //   window.localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }

  public get loggedIn(): boolean {
    return (localStorage.getItem(TOKEN_KEY) !== null);
  }

}
