export const Code = {
    html: {
        content: `
    <button class="overflow-visible" mat-icon-button [matMenuTriggerFor]="notificationsMenu">
    <td-notification-count [notifications]="4">
        <mat-icon>notifications</mat-icon>
    </td-notification-count>
    </button>
    
    <mat-menu #notificationsMenu="matMenu" [overlapTrigger]="false">
    <td-menu>
        <div td-menu-header class="mat-subheading-2 push-none">Notifications</div>
        <mat-nav-list dense>
        <ng-template let-last="last" ngFor [ngForOf]="[0,1]">
            <a mat-list-item>
            <mat-icon matListAvatar>today</mat-icon>
            <h4 matLine><span class="text-wrap">A user did an activity on an item that you've subscribed to follow actions on.</span></h4>
            <p matLine>22 minutes ago</p>
            </a>
            <mat-divider *ngIf="!last"></mat-divider>
        </ng-template>
        </mat-nav-list>
        <button mat-button color="accent" td-menu-footer>
        See All Notifications
        </button>
    </td-menu>
    </mat-menu>
    `,
        language: 'html'
        },
    ts: {
        content: `
    import { Component, OnInit } from '@angular/core';


    import { Code } from './code';
    import { EShareDataService } from '../../../e-shared/e-sharedata.service'
    @Component({
        selector: 'app-e-mat-notification',
        templateUrl: './e-mat-notification.component.html',
        styleUrls: ['./e-mat-notification.component.scss']
    })
    export class EMatNotificationComponent implements OnInit {
        notifications: any = "101"
        
        code: any;
        constructor(private eShareDataService: EShareDataService) { }
        
        ngOnInit() {
        this.code = Code;
        this.eShareDataService.pushCode(this.code);
        console.log(this.code)
        }
    
    }
                
        `,
        language: 'javascript'
        },
    css: {
        content: `
            
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
