import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from './utils/storage';
import { MatSnackBar } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class EShareDataService {
  private subject = new Subject<any>();
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private _domSanitizer: DomSanitizer, private _snackBarService: MatSnackBar) { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  get(key) {
    return Storage.getSessionItem(key);
  }

  set(key, val) {
    Storage.setSessionItem(key, val);
  }
  clearData() {
    Storage.clearSession();
  }
  removeKey(key) {
    Storage.removeSessionItem(key);
  }
  pushCode(code: any) {
    this.subject.next(code);
  }
  getCode(): Observable<any> {
    return this.subject.asObservable();
  }
  showMessage(message: string) {
    this._snackBarService.open(message, 'x', { duration: 3000 });
  }
  bypassURL(url: string) {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
