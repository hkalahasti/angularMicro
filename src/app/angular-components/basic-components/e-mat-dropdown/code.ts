export const Code = {
    html: {
      content: ` 
    <div>
    <mat-form-field>
      <mat-select placeholder="Favorite food">
        <mat-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </mat-option>
      </mat-select>
    </mat-form-field>
    </div>
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';
    export interface Food {
      value: string;
      viewValue: string;
    }
    @Component({
      selector: 'app-e-mat-dropdown',
      templateUrl: './e-mat-dropdown.component.html',
      styleUrls: ['./e-mat-dropdown.component.scss']
    })
    export class EMatDropdownComponent implements OnInit {
      foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
      ];
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