export const Code = {
  html: {
    content: ` 
  <p>Display event : {{displayEvent | json}}</p>
  <div *ngIf="calendarOptions">
      <ng-fullcalendar #ucCalendar [options]="calendarOptions" (eventClick)="eventClick($event.detail)" (eventDrop)="updateEvent($event.detail)"
          (eventResize)="updateEvent($event.detail)" (clickButton)="clickButton($event.detail)"></ng-fullcalendar>
  </div>    
`,
    language: 'html'
  },
  ts: {
    content: `
  import { Component, OnInit, ViewChild } from '@angular/core';
  import { CalendarComponent } from 'ng-fullcalendar';
  import { Options } from 'fullcalendar';
  import { EventSesrvice } from './events.service';
  @Component({
    selector: 'app-e-calender',
    templateUrl: './e-calender.component.html',
    styleUrls: ['./e-calender.component.scss']
  })
  export class ECalenderComponent implements OnInit {
    calendarOptions: Options;
    displayEvent: any;
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    constructor(protected eventService: EventSesrvice) { }
  
    ngOnInit() {
      this.eventService.getEvents().subscribe(data => {
        this.calendarOptions = {
          editable: true,
          eventLimit: false,
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
          },
          events: data
        };
      });
    }
    clickButton(model: any) {
      this.displayEvent = model;
    }
    eventClick(model: any) {
      model = {
        event: {
          id: model.event.id,
          start: model.event.start,
          end: model.event.end,
          title: model.event.title,
          allDay: model.event.allDay
          // other params
        },
        duration: {}
      }
      this.displayEvent = model;
    }
    updateEvent(model: any) {
      model = {
        event: {
          id: model.event.id,
          start: model.event.start,
          end: model.event.end,
          title: model.event.title
          // other params
        },
        duration: {
          _data: model.duration._data
        }
      }
      this.displayEvent = model;
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