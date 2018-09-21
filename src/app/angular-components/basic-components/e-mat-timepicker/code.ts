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
    }
  }