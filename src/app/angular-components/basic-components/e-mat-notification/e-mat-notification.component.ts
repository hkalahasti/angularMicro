import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-mat-notification',
  templateUrl: './e-mat-notification.component.html',
  styleUrls: ['./e-mat-notification.component.scss']
})
export class EMatNotificationComponent implements OnInit {
  notifications: any = "101"
  constructor() { }

  ngOnInit() {
  }

}
