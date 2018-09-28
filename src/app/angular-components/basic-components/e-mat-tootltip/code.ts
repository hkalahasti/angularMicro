export const Code = {
    html: {
      content: ` 
    <button mat-raised-button
        matTooltip="ToolTip on Top"
        matTooltipPosition="above"
        aria-label="Button that displays a tooltip when focused or hovered over">
        ToolTip on Top
    </button>
    <button mat-raised-button
        matTooltip="ToolTip on Right"
        matTooltipPosition="after"
        aria-label="Button that displays a tooltip when focused or hovered over">
        ToolTip on Right
    </button>
    <button mat-raised-button
        matTooltip="ToolTip on below"
        matTooltipPosition="below"
        aria-label="Button that displays a tooltip when focused or hovered over">
        ToolTip on below
    </button>
    <button mat-raised-button
        matTooltip="ToolTip on Left"
        matTooltipPosition="left"
        aria-label="Button that displays a tooltip when focused or hovered over">
        ToolTip on Left
    </button>
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'e-mat-tooltip',
      templateUrl: './e-mat-tooltip.component.html',
      styleUrls: ['./e-mat-tooltip.component.scss']
    })
    export class EMatTooltipComponent implements OnInit {
    
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