import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Storage} from './utils/storage';
@Injectable()
export class EShareDataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  get(key) {
    return Storage.getSessionItem(key);
  }

  set(key, val) {
    Storage.setSessionItem(key, val);
  }
  clearData(){
    Storage.clearSession();
  }
  removeKey(key) {
     Storage.removeSessionItem(key);
   }

}
