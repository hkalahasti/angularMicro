export const Code = {
    html: {
        content: ` 
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
    </nav>
      
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
    </nav>
      
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="">Library</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>
`,
        language: 'html'
    },
    ts: {
        content: `
        import { Component, OnInit } from '@angular/core';

        @Component({
          selector: 'app-e-mat-breadcrumb',
          templateUrl: './e-mat-breadcrumb.component.html',
          styleUrls: ['./e-mat-breadcrumb.component.scss']
        })

        export class EMatBreadcrumbComponent implements OnInit { }`,
        language: 'javascript'
    },
    css: {
        content: `/** No CSS for this example */
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