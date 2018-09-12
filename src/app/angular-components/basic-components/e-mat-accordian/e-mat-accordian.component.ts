import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-mat-accordian',
  templateUrl: './e-mat-accordian.component.html',
  styleUrls: ['./e-mat-accordian.component.scss']
})
export class EMatAccordianComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  ngOnInit() {
  }

}
