import { Component, OnInit } from '@angular/core';
import { memoize } from 'lodash-decorators';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'e-dashboard',
  templateUrl: './e-dashboard.component.html',
  styleUrls: ['./e-dashboard.component.scss']
})
export class EDashboardComponent implements OnInit {
  componentName: string = "";
  constructor() { }

  ngOnInit() {
  }

}
