export const Code = {
  html: {
    content: ` 
  <div fxLayout="row wrap" fxLayoutAlign="start start" class="m-b-30">
          <h5 class="m-b-15"> Determinate Progress Model</h5>
      <div fxFlex="100" fxLayoutAlign="start start">
          <mat-progress-bar mode="determinate" value="40"></mat-progress-bar>
      </div>
  </div>

  <div fxLayout="row wrap" fxLayoutAlign="start start"  class="m-t-30 m-b-30">
      <h5  class="m-b-15">Indeterminate  Progress Model</h5>
      <div fxFlex="100" fxLayoutAlign="start start">
          <mat-progress-bar mode="indeterminate"></mat-progress-bar>
      </div>
  </div>      
  `,
    language: 'html'
  },
  ts: {
    content: `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'e-mat-progressbar',
    templateUrl: './e-mat-progressbar.component.html',
    styleUrls: ['./e-mat-progressbar.component.scss']
  })
  export class EMatProgressbarComponent implements OnInit {
  
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
  }
}