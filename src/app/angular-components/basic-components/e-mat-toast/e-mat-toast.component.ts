import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Code } from './code';
import { EShareDataService } from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'e-mat-toast',
  templateUrl: './e-mat-toast.component.html',
  styleUrls: ['./e-mat-toast.component.scss']
})
export class EMatToastComponent implements OnInit {

  code: any;
  constructor(private eShareDataService: EShareDataService, public snackBar: MatSnackBar) { }


  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
