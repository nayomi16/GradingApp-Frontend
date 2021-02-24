import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TeacherService} from '../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
   teachId: any;
   name: string;
   class;
   assId;
   gradeDetail = [];
   sId;
   averageTime;
   correctPercent;
   questionView = false;
   mainView = true;
   staticView = false;
   all = false;
   teacherAssignDetails = [];
   assgnDetail = [];
   qIds = [];
   qId: any;


  constructor(private route: ActivatedRoute, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      this.teachId = param.userId;
    });
    this.teacherService.getTeacher(this.teachId).subscribe((response) => {

      this.name = response.data.teacherObj.name;
      this.class = response.data.teacherObj.class;
      response.data.teacherAssgnDetails.forEach(assgnDetail => {
          this.teacherAssignDetails.push(assgnDetail);


      });

    });

  }

  showQuestions(qIds: any, assId: any) {
    this.mainView = false;
    this.questionView = true;
    this.qIds = qIds;
    this.assId = assId;
    console.log(qIds);

  }

  showStatics(qId: any) {
    this.mainView = false;
    this.questionView = false;
    this.staticView = true;

    this.teacherService.getStatisticsOnQuestion(this.teachId, this.assId, qId).subscribe((response) => {
      this.qId = response.data.qId;
      this.averageTime = response.data.averageTimeSpent;
      this.correctPercent = response.data.corectPercentage;
      console.log(this.averageTime);
    });
  }
  averallGrads(assId: any) {
    this.mainView = false;
    this.all = true;
    this.teacherService.getOverallGrade(this.teachId, assId).subscribe((response) => {
        console.log(response.data);
        this.gradeDetail = response.data;
    });

  }
  backAll() {
    this.mainView = true;
    this.all = false;
  }
  backStatic() {
    this.staticView = false;
    this.questionView = true;
  }
  backQuestion() {
    this.mainView = true;
    this.questionView = false;
  }

}
