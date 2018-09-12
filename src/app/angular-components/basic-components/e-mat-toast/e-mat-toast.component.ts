import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'e-mat-toast',
  templateUrl: './e-mat-toast.component.html',
  styleUrls: ['./e-mat-toast.component.scss']
})
export class EMatToastComponent implements OnInit {

    constructor(public snackBar: MatSnackBar) {}

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

  ngOnInit() {
  }

}
