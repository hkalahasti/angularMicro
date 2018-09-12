import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'e-mat-datepicker',
  templateUrl: './e-mat-datepicker.component.html',
  styleUrls: ['./e-mat-datepicker.component.scss']
})
export class EMatDatePickerComponent implements OnInit {

  startDate : Date;
  constructor() {
    this.startDate = new Date();
   }

  ngOnInit() {
  }
}
