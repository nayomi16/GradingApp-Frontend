import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }

  invokeFirstComponent = new EventEmitter();


  onFirstComponentButtonClick() {
    this.invokeFirstComponent.emit();
  }
}
