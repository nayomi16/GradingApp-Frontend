import { Component } from '@angular/core';
import {TOKEN_KEY} from './constants/constants';
import {EventEmitterService} from './services/event-emitter.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GradingApp';
  isLogged = false

  clickEventSubscription: Subscription;
  constructor(private eventEmiterService: EventEmitterService) {
    this.clickEventSubscription=this.eventEmiterService.getClickEvent().subscribe(()=>{
      this.ngOnInit();
    })
  }

  ngOnInit(): void {
    if (window.localStorage.getItem(TOKEN_KEY)) {
      console.log(window.localStorage.getItem(TOKEN_KEY));
      this.isLogged = true;
    }

  }
  logout() {
    this.isLogged = false;
    window.localStorage.clear();
  }

}
