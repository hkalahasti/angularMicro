export const Code = {
    html: {
      content: ` 
    <p class="mat-body-1">Standalone message:</p>
    <td-message label="Error!" sublabel="You did something wrong!" color="warn" icon="error"></td-message>
    <p class="mat-body-1">Message in a card with action</p>
    <mat-card>
      <td-message label="Warning!" sublabel="Your probably shouldn't do that!" color="primary" icon="warning">
        <button td-message-actions mat-button>VIEW MORE</button>
      </td-message>
    </mat-card>
    <!-- <p class="mat-body-1">Message in a card content:</p> -->
    <mat-card>
      <!-- <mat-card-title>Card title</mat-card-title> -->
      <mat-divider></mat-divider>
      <td-message label="Info" sublabel="Maybe you want to know this" color="accent" icon="info"></td-message>
      <mat-card-content>
        content
      </mat-card-content>
    </mat-card>
    <!-- <p class="mat-body-1">Toggle visibility:</p> -->
    <td-message #messageDemo color="primary" class="pad-sm" label="Hide me!" sublabel="You can toggle my visibility & add a class!">
      <button td-message-actions mat-icon-button (click)="messageDemo.close()"><mat-icon>cancel</mat-icon></button>
    </td-message>
    <button mat-button color="accent" (click)="messageDemo.toggle()">
      Toggle Visibility
    </button>
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-e-mat-messagebox',
      templateUrl: './e-mat-messagebox.component.html',
      styleUrls: ['./e-mat-messagebox.component.scss']
    })
    export class EMatMessageboxComponent implements OnInit {
    
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