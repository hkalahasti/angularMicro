import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { memoize } from 'lodash-decorators';
import { Subscription } from 'rxjs/Subscription';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import {EShareDataService} from '../../e-shared/e-sharedata.service';
import {Code} from './code'
@Component({
  selector: 'e-layout',
  templateUrl: './e-layout.component.html',
  styleUrls: ['./e-layout.component.scss']
})
export class ELayoutComponent implements OnInit {

  componentName: string = "";
  code_subscription: Subscription;
  code :any;
  constructor(
    private _ActivatedRoute: ActivatedRoute,public fb: FormBuilder,private eShareDataService:EShareDataService
  ) { 
    this.code_subscription = this.eShareDataService.getCode().subscribe(
      code => { 
        this.code = code; 
        this.eShareDataService.set('code', this.code);
      });
    this._ActivatedRoute.url.subscribe(() => {
      console.log(this._ActivatedRoute.snapshot.children);
    });
  }

  ngOnInit() {
      if(this.eShareDataService.get('code')){
        this.code = this.eShareDataService.get('code');
      }else{
        this.code = Code;
      }
  }


  copyToClipboard(content: string) {
    const el = document.createElement('textarea');
    el.value = content;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
