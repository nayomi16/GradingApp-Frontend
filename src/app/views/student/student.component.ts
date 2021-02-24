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
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      this.userId = param.userId;
    });
    this.studentService.getStudent(this.userId).subscribe((response) => {
      console.log(response.data);
    });

  }

}
