export const Code = {
    html: {
      content: `
    <h5>{{ title }}</h5>
      <!-- this creates a google map on the page with the given lat/lng from -->
      <!-- the component as the initial center of the map: -->
      <agm-map [latitude]="lat" [longitude]="lng">
        <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
    </agm-map> 
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-e-mat-map',
      templateUrl: './e-mat-map.component.html',
      styleUrls: ['./e-mat-map.component.scss']
    })
    export class EMatMapComponent implements OnInit {
      title: string = 'My first Angular Map';
      lat: number =17.3850;
      lng: number =  78.4867;
      constructor() { }
    
      ngOnInit() {
      }
    
    }
      
        `,
    language: 'javascript'
  },
    css: {
      content: `
    agm-map {
      height: 300px;
    }
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