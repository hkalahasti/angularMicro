import { Component, OnInit } from '@angular/core';

import { Code } from './code';
import { EShareDataService } from '../../../e-shared/e-sharedata.service'

@Component({
  selector: 'app-e-mat-carousel',
  templateUrl: './e-mat-carousel.component.html',
  styleUrls: ['./e-mat-carousel.component.scss']
})
export class EMatCarouselComponent implements OnInit {

  code: any;
  constructor(private eShareDataService: EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
    console.log(this.code)
  }

  slides = [
    {img: "https://www.cdc.gov/wcms/3.0/cdcwp/gadgets/images/kitchen_adventurer_cheesecake_brownie.jpg"},
    {img: "https://www.cdc.gov/wcms/3.0/cdcwp/gadgets/images/kitchen_adventurer_donut_1.jpg"},
    {img: "https://www.cdc.gov/wcms/3.0/cdcwp/gadgets/images/kitchen_adventurer_caramel.jpg"},
  ];

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};

  addSlide() {
    this.slides.push({img: "https://www.cdc.gov/wcms/3.0/cdcwp/gadgets/images/kitchen_adventurer_caramel.jpg"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }
}
