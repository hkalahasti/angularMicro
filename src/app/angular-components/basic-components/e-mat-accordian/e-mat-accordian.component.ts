import { Component, OnInit } from '@angular/core';
import {Code} from './code';
@Component({
  selector: 'app-e-mat-accordian',
  templateUrl: './e-mat-accordian.component.html',
  styleUrls: ['./e-mat-accordian.component.scss']
})
export class EMatAccordianComponent implements OnInit {
  code:any;
  constructor() { }
  panelOpenState = false;
  ngOnInit() {
    this.code = Code;
    console.log(this.code)
  }

}
