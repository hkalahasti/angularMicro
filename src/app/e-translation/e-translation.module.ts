import { NgModule } from '@angular/core';
import { ETranslationComponent } from './e-translation.component';
import { EMatSharedModule } from '../e-shared';
import { YandexService } from './e-service/e-translation.service';

@NgModule({
  imports: [
    EMatSharedModule
  ],
  exports: [
  ],
  declarations: [
    ETranslationComponent
  ],
  providers: [YandexService]
})
export class ETranslationModule { }
