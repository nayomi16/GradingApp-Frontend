import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  userId;
  assId;
  name;
  class;
  attemptAssignments = [];
  questionsResults=[];
  questionsReviews=[];
  mainView = true;
  resultView = false;
  reviewView = false;
  assignmentId;
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      this.userId = param.userId;
    });
    this.studentService.getStudent(this.userId).subscribe((response) => {
      console.log(response.data);
      this.name = response.data.studentObj.name;
      this.class = response.data.studentObj.class;
      response.data.assignments.forEach(assignment => {
        this.attemptAssignments.push(assignment);
      });
    });

  }
  results(assId: any) {
    this.mainView = false;
    this.resultView = true;
    this.reviewView = false;
    this.studentService.getDetailResults(assId, this.userId).subscribe((response) => {
      console.log('data=', response.data);
      response.data.forEach(result => {
        this.questionsResults.push(result);
      });
    });
  }

  review(assId: any) {
    this.mainView = false;
    this.resultView = false;
    this.reviewView = true;
    this.studentService.reviewAnswer(assId, this.userId).subscribe((response)=>{
      console.log("hhhh =",response.data);
      response.data.forEach(review => {
        this.questionsReviews.push(review);
      });
    });

  }
  back(){
    this.mainView = true;
    this.resultView = false;
    this.reviewView = false;
  }


}
