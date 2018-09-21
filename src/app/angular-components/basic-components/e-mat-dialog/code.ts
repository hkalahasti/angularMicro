export const Code = {
    html: {
      content: ` 
    <h1 mat-dialog-title>Hi {{data.name}}</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
      <mat-form-field>
        <input matInput [(ngModel)]="data.animal">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
    </div>
    <ol>
      <li>
        <mat-form-field>
          <input matInput [(ngModel)]="name" placeholder="What's your name?">
        </mat-form-field>
      </li>
      <li>
        <button mat-raised-button (click)="openDialog()">Pick one</button>
      </li>
      <li *ngIf="animal">
        You chose:
        <i>{{animal}}</i>
      </li>
    </ol>
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { NgModule, Component, Inject } from '@angular/core';
    import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
    
    @Component({
      selector: 'e-mat-dialog',
      templateUrl: './e-mat-dialog.component.html',
      styleUrls: ['./e-mat-dialog.component.scss']
    })
    
    export class EMatDialogComponent {
    
      animal: string;
      name: string;
    
      constructor(public dialog: MatDialog) {}
    
      openDialog(): void {
        let dialogRef = this.dialog.open(EMatDialogPopupComponent, {
          width: '250px',
          data: { name: this.name, animal: this.animal }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
      }
    }
    
    @Component({
      selector: 'e-mat-dialog-popup.component',
      templateUrl: 'e-mat-dialog-popup.component.html',
    })
    export class EMatDialogPopupComponent {
    
      constructor(
        public dialogRef: MatDialogRef<EMatDialogPopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
    
      onNoClick(): void {
        this.dialogRef.close();
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