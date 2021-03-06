import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserAuthService} from '../../services/user-auth.service';
import {ROLE, TOKEN_KEY, USER_DTO} from '../../constants/constants';
import {EventEmitterService} from '../../services/event-emitter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg;
  isLogged = true;
  form = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private userAuthServise: UserAuthService, private eventEmitter: EventEmitterService) { }

  ngOnInit(): void {
  }

  get userId() {
    return this.form.get('userId');
  }

  get passWord() {
    return this.form.get('password');
  }

  login() {
    if (this.form.valid ) {
      this.userAuthServise.signInUser(this.form.value).subscribe((response) => {
        if (response.code === 200 && response.data != null) {
          this.isLogged = true;
          console.log(response.data);
          window.localStorage.setItem( TOKEN_KEY, response.data.token );
          window.localStorage.setItem( USER_DTO, JSON.stringify( response.data ) );
          window.localStorage.setItem( ROLE, response.data.role );

          this.eventEmitter.sendClickEvent();
          if (response.data.role === 'student') {
            this.router.navigate( ['/student'], {
              queryParams: {userId: this.userId.value}
            } );
          } else if (response.data.role === 'teacher') {
            this.router.navigate( ['/teacher'], {
              queryParams: {userId: this.userId.value}
            } );
          }


        } else {
          this.isLogged = false;
          this.errorMsg = 'incorrect username or password';
        }

      }, (err) => {
        this.isLogged = false;
        this.errorMsg = 'incorrect username or password';
      });
    }


  }

  reloadPage() {
    window.location.reload();
  }

}
