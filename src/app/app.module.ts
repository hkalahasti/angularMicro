import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { EModuleModules } from './e-modules/index';
import { appRoutes } from './app.routing';
import { ECustomIconService } from './e-shared/index';
import { EMatComponentsModule } from './angular-components/basic-components/e-mat-components.module';
import { ETranslationModule } from './e-translation/e-translation.module';

import { NguiAutoCompleteModule } from '@ngui/auto-complete';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutes,
    LayoutModule,
    EMatComponentsModule,
    EModuleModules,
    ETranslationModule,
    NguiAutoCompleteModule
  ],
  providers: [
    ECustomIconService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
