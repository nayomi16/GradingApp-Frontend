import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ResponseDto} from '../dto/response-dto';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private URL = 'http://localhost:5000/teacher/';

  constructor(private http: HttpClient) { }

  getTeacher(teachId): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + teachId);
  }


  getStatisticsOnQuestion(teachId: any, assId: any, qId: any): Observable<ResponseDto>  {
    return this.http.get<ResponseDto>(this.URL + 'assignments/statics' + '/' + teachId + '/' + assId + '/' + qId);
  }

  getOverallGrade(teachId: any, assId: any): Observable<ResponseDto>  {
    return this.http.get<ResponseDto>(this.URL + 'assignments/gradeDetail' + '/' + teachId + '/' + assId );

  }
}
