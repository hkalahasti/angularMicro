import { Component, OnInit } from '@angular/core';
import { memoize } from 'lodash-decorators';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import {ComponentList} from './component-list';
import { EAnimationService } from '../../e-shared/e-animation.service';
import {Router} from '@angular/router';
@Component({
  selector: 'e-dashboard',
  templateUrl: './e-dashboard.component.html',
  styleUrls: ['./e-dashboard.component.scss'],
  host: EAnimationService.host,
  animations: EAnimationService.page
})
export class EDashboardComponent implements OnInit {
  componentName: string = "";
  list : any = [];
  constructor(private router : Router) { 
    
  }

  ngOnInit() {
    this.list = ComponentList
    console.log(this.list);
  }
  openComponent(item:any){
    this.router.navigate([item.link]);
  }

}
