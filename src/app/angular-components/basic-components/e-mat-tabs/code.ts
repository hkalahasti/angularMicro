export const Code = {
    html: {
      content: ` 
    <mat-tab-group>
      <mat-tab label="First"> Content 1 </mat-tab>
      <mat-tab label="Second"> Content 2 </mat-tab>
      <mat-tab label="Third"> Content 3 </mat-tab>
    </mat-tab-group>
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'e-mat-tabs',
      templateUrl: './e-mat-tabs.component.html',
      styleUrls: ['./e-mat-tabs.component.scss']
    })
    export class EMatTabsComponent implements OnInit {
    
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