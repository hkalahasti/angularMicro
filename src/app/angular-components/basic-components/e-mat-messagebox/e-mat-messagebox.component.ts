import { Component, OnInit } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'app-e-mat-messagebox',
  templateUrl: './e-mat-messagebox.component.html',
  styleUrls: ['./e-mat-messagebox.component.scss']
})
export class EMatMessageboxComponent implements OnInit {

  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
