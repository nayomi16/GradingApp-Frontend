import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TeacherComponent} from './views/teacher/teacher.component';
import {LoginComponent} from './views/login/login.component';
import {StudentComponent} from './views/student/student.component';

const routes: Routes = [
  {
    path : 'student', component: StudentComponent
  },
  {
    path : 'login', component : LoginComponent
  },

  {
    path : 'teacher', component : TeacherComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
