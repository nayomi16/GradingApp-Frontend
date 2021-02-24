import { Component } from '@angular/core';
import {TOKEN_KEY} from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GradingApp';
  isLogged = false;
  constructor() {
    if (window.localStorage.getItem(TOKEN_KEY)) {
      console.log(window.localStorage.getItem(TOKEN_KEY));
      this.isLogged = true;
    }
  }

  ngOnInit(): void {


  }
  logout() {
    this.isLogged = false;
    window.localStorage.clear();
  }

}
