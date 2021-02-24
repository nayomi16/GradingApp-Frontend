import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ResponseDto} from '../dto/response-dto';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private URL = 'http://localhost:5000/user';

  constructor(private http: HttpClient) { }

  signInUser(user): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL + '/login', user);
  }

  // logout() {
  //   window.localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }

}
