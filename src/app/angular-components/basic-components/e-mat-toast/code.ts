export const Code = {
    html: {
      content: `
    <mat-form-field>
      <input matInput value="Disco party!" placeholder="Message" #message>
    </mat-form-field>
  
    <mat-form-field>
      <input matInput value="Dance" placeholder="Action" #action>
    </mat-form-field>
  
    <button mat-button (click)="openSnackBar(message.value, action.value)">Show snack-bar</button> 
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';
    import {MatSnackBar} from '@angular/material';
    
    @Component({
      selector: 'e-mat-toast',
      templateUrl: './e-mat-toast.component.html',
      styleUrls: ['./e-mat-toast.component.scss']
    })
    export class EMatToastComponent implements OnInit {
  
        constructor(public snackBar: MatSnackBar) {}
    
        openSnackBar(message: string, action: string) {
          this.snackBar.open(message, action, {
            duration: 2000,
          });
        }
    
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