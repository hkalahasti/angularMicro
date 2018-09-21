import { Component, OnInit } from '@angular/core';


import { Code } from './code';
import { EShareDataService } from '../../../e-shared/e-sharedata.service'
@Component({
  selector: 'app-e-mat-notification',
  templateUrl: './e-mat-notification.component.html',
  styleUrls: ['./e-mat-notification.component.scss']
})
export class EMatNotificationComponent implements OnInit {
  notifications: any = "101"
  
  code: any;
  constructor(private eShareDataService: EShareDataService) { }
  
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
    console.log(this.code)
  }

}
