import { Component, OnInit } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'e-mat-timepicker',
  templateUrl: './e-mat-timepicker.component.html',
  styleUrls: ['./e-mat-timepicker.component.scss']
})
export class EMatTimepickerComponent implements OnInit {

  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
