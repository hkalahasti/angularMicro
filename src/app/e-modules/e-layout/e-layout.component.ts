import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { memoize } from 'lodash-decorators';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import {EShareDataService} from '../../e-shared/e-sharedata.service'
import {Code} from './code'
@Component({
  selector: 'e-layout',
  templateUrl: './e-layout.component.html',
  styleUrls: ['./e-layout.component.scss']
})
export class ELayoutComponent implements OnInit {

  componentName: string = "";
  code :any;
  constructor(
    private _ActivatedRoute: ActivatedRoute,public fb: FormBuilder,private eShareDataService:EShareDataService
  ) { }

  ngOnInit() {
    this._ActivatedRoute.url.subscribe(() => {
      console.log(this._ActivatedRoute.snapshot.children);
    });
    if(this.eShareDataService.get('code')){
      this.code = this.eShareDataService.get('code');
    }else{
      this.code = Code;
    }
  }

  someCode: string = `
  <form class="example-form">
    <mat-form-field class="example-full-width">
      <input matInput placeholder="State" aria-label="State" [matAutocomplete]="auto" [formControl]="stateCtrl">
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let state of filteredStates | async" [value]="state.name">
          <img class="example-option-img" aria-hidden [src]="state.flag" height="25">
          <span>{{state.name}}</span> |
          <small>Population: {{state.population}}</small>
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
    <br>
    <mat-slide-toggle
      [checked]="stateCtrl.disabled"
      (change)="stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()">
      Disable Input?
    </mat-slide-toggle>
  </form>`;


  copyToClipboard(id: string) {
    const el = document.createElement('textarea');
    el.value = this[id];
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
