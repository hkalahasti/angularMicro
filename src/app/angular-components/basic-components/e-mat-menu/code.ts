export const Code = {
    html: {
      content: `
    <button mat-button [matMenuTriggerFor]="menu">Menu</button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>Item 1</button>
      <button mat-menu-item>Item 2</button>
    </mat-menu> 
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'e-mat-menu',
      templateUrl: './e-mat-menu.component.html',
      styleUrls: ['./e-mat-menu.component.scss']
    })
    export class EMatMenuComponent implements OnInit {
    
      constructor() { }
    
      ngOnInit() {
      }
    
    }
      
        `,
    language: 'javascript'
  },
    css: {
      content: `
    .divcontent{
      display: flex;
      justify-content: center;
    }
    
    .cardcontent{
      width: 100%;
        height: 100px;
        margin: 5px;
    }
    
    .cardlayout{
        display: flex;
        flex-wrap: wrap;
        width: 50%;
    }
    
    .mat-card, .mat-card-content, .mat-action-row, .mat-expansion-panel{
      background-color: lightblue !important;
    }
    
    .mat-expansion-panel-header, {
      background-color: blue !important;
    }
      
          `,
      language: 'css'
    }
  }