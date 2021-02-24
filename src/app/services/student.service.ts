import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ResponseDto} from "../dto/response-dto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private URL = 'http://localhost:5000/student/';

  constructor(private http: HttpClient) { }

  getStudent(userId): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + userId);
  }


}
