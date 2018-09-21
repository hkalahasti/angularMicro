import { Component, OnInit } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'app-e-mat-slider',
  templateUrl: './e-mat-slider.component.html',
  styleUrls: ['./e-mat-slider.component.scss']
})
export class EMatSliderComponent implements OnInit {

  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
