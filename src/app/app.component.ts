import { Component, ViewContainerRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import {EShareDataService} from './e-shared/e-sharedata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public viewRef : ViewContainerRef,  private _iconRegistry: MatIconRegistry,private eShareDataService:EShareDataService) {
    this.loadIcons();
  }
  loadIcons(){
    this._iconRegistry.addSvgIconSetInNamespace('core',
      this.eShareDataService.bypassURL('/assets/icons/app-icons.svg'));
}
}
