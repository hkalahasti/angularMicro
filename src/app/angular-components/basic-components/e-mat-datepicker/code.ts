export const Code = {
    html: {
      content: `
    <mat-form-field>
      <input matInput [matDatepicker]="picker" placeholder="Choose a date">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker startView="year" [startAt]="startDate"></mat-datepicker>
    </mat-form-field>       
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'e-mat-datepicker',
      templateUrl: './e-mat-datepicker.component.html',
      styleUrls: ['./e-mat-datepicker.component.scss']
    })
    export class EMatDatePickerComponent implements OnInit {
    
      startDate : Date;
      constructor() {
        this.startDate = new Date();
        }
    
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