import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { memoize } from 'lodash-decorators';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'e-layout',
  templateUrl: './e-layout.component.html',
  styleUrls: ['./e-layout.component.scss']
})
export class ELayoutComponent implements OnInit {

  componentName: string = "";
  
  constructor(
    private _ActivatedRoute: ActivatedRoute,public fb: FormBuilder
  ) { }

  ngOnInit() {
    this._ActivatedRoute.url.subscribe(() => {
      console.log(this._ActivatedRoute.snapshot.children);
    });
    
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
