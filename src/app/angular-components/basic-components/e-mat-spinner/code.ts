export const Code = {
    html: {
      content: `
    <div class="spinner-container">
      <mat-spinner></mat-spinner>
    </div> 
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'e-mat-spinner',
      templateUrl: './e-mat-spinner.component.html',
      styleUrls: ['./e-mat-spinner.component.scss']
    })
    export class EMatSpinnerComponent implements OnInit {
    
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