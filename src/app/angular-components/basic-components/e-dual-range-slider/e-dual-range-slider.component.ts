import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-dual-range-slider',
  templateUrl: './e-dual-range-slider.component.html',
  styleUrls: ['./e-dual-range-slider.component.scss']
})
export class EDualRangeSliderComponent implements OnInit {
  currencySymbol:any = "$";
  from:any;
  to:any;
  constructor() { }

  ngOnInit() {
  }
    myOnFinish(event) {
    this.from = event.from;
    this.to = event.to;
  }

}
