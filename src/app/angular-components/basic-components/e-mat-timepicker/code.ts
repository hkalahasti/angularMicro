export const Code = {
    html: {
      content: ` 
    <input [ngxTimepicker]="picker">
    <ngx-material-timepicker #picker></ngx-material-timepicker>    
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'e-mat-timepicker',
      templateUrl: './e-mat-timepicker.component.html',
      styleUrls: ['./e-mat-timepicker.component.scss']
    })
    export class EMatTimepickerComponent implements OnInit {
    
      constructor() { }
    
      ngOnInit() {
      }
    
    }
       
        `,
    language: 'javascript'
  },
    css: {
      content: `
    /** No CSS for this example */
          `,
      language: 'css'
    },
    setup: {
        content: {
            step1: ``,
            step2: `
    {
        ...
        "apps": [
            {
            ...
            "scripts": [
                "../node_modules/jquery/dist/jquery.min.js", 
                "../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js"
            ],
            ... 
`,
            step3: `
    {
        ...
        "apps": [
          {
            ...
            "styles": [
                    "../node_modules/ion-rangeslider/css/ion.rangeSlider.css",
                    "../node_modules/ion-rangeslider/css/ion.rangeSlider.skinFlat.css"
            ],
            ...   
` ,
            step4: `
import { IonRangeSliderModule } from "ng2-ion-range-slider";
@NgModule({
    imports: [IonRangeSliderModule]
})`
        },


    }
  }