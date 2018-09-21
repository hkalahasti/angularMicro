import { Component, OnInit } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'e-mat-spinner',
  templateUrl: './e-mat-spinner.component.html',
  styleUrls: ['./e-mat-spinner.component.scss']
})
export class EMatSpinnerComponent implements OnInit {

  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
