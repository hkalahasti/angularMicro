import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ESharedModule } from '../e-shared/index';
import { ESideNavComponent } from './e-sidenav/e-sidenav.component';
import { EToolbarComponent } from './e-toolbar/e-toolbar.component';
import { EDashboardComponent } from './e-dashboard/e-dashboard.component';
import { HighlightModule, HighlightOptions } from 'ngx-highlightjs';

import { PrismModule } from '@ngx-prism/core';
import { DocsExampleModule } from '@ngx-docs/example'; // added
const options: HighlightOptions = {
  theme: 'agate',
  path: 'assets/lib/hljs/highlight.pack'
 };
@NgModule({
  imports: [
    ESharedModule,
    BrowserAnimationsModule,
    HighlightModule.forRoot({theme: 'default'}),
    DocsExampleModule,

    // @ngx-prism
    PrismModule
  ],
  exports: [
    ESideNavComponent,
    EToolbarComponent,
    EDashboardComponent,
  ],
  declarations: [
    ESideNavComponent,
    EToolbarComponent,
    EDashboardComponent,
  ],
  providers : []
})
export class EModuleModules { }
