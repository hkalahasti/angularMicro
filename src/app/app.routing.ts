import { Routes, RouterModule } from "@angular/router";
import { EDashboardComponent, ELayoutComponent } from './e-modules/index';
import { ModuleWithProviders } from "@angular/core";

import { ETranslationComponent } from './e-translation/e-translation.component';

import {
  EMatDatePickerComponent, EMatTimepickerComponent,
  EMatSpinnerComponent, EMatTabsComponent,
  EMatTooltipComponent, EMatProgressbarComponent,
  EMatSwitchComponent, EMatToastComponent,
  EMatDialogPopupComponent, EMatDialogComponent,
  EMatMenuComponent, EMatSliderComponent,
  EMatCarouselComponent, EMatBreadcrumbComponent,
  EMatMessageboxComponent, EMatNavigationComponent,EMatAutocompleteComponent,EMatAccordianComponent, EMatNotificationComponent,
  EMatMapComponent,
  EMatVideoComponent,EMatDropdownComponent, ECalenderComponent,EDualRangeSliderComponent
} from './angular-components/basic-components/index';



const routes: Routes = [
  {
    path: 'notification', component: ELayoutComponent, children: [
      {
        path: '', component: EMatNotificationComponent, outlet: 'basic', data: { name: 'Notification', type : 'Custom' }
      }
    ]
  },
  {
    path: 'map', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMapComponent, outlet: 'basic', data: { name: 'Map', type : 'Custom' }
      }
    ]
  },
  {
    path: 'video', component: ELayoutComponent, children: [
      {
        path: '', component: EMatVideoComponent, outlet: 'basic', data: { name: 'Video', type : 'Custom' }
      }
    ]
  },
  {
    path: 'dropdown', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDropdownComponent, outlet: 'basic', data: { name: 'Dropdown', type : 'Material' }
      }
    ]
  },
  {
    path: 'navigation', component: ELayoutComponent, children: [
      {
        path: '', component: EMatNavigationComponent, outlet: 'basic', data: { name: 'Navigation', type : 'Material' }
      }
    ]
  },
  {
    path: 'datepicker', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDatePickerComponent, outlet: 'basic', data: { name: 'Datepicker', type : 'Material' }
      }
    ]
  },
  {
    path: 'timepicker', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTimepickerComponent, outlet: 'basic', data: { name: 'Timepicker', type : 'Material' }
      }
    ]
  },
  {
    path: 'dialog', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDialogComponent, outlet: 'basic', data: { name: 'Dialog', type : 'Material' }
      }
    ]
  },
  {
    path: 'tooltip', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTooltipComponent, outlet: 'basic', data: { name: 'Tooltip', type : 'Material' }
      }
    ]
  },
  {
    path: 'menu', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMenuComponent, outlet: 'basic', data: { name: 'Menu', type : 'Material' }
      }
    ]
  },
  {
    path: 'spinner', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSpinnerComponent, outlet: 'basic', data: { name: 'Spinner', type : 'Material' }
      }
    ]
  },
  {
    path: 'sliders', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSliderComponent, outlet: 'basic', data: { name: 'Slider', type : 'Material' }
      }
    ]
  },
  {
    path: 'carousel', component: ELayoutComponent, children: [
      {
        path: '', component: EMatCarouselComponent, outlet: 'basic', data: { name: 'Carousel', type : 'Material' }
      }
    ]
  },
  {
    path: 'breadcrumb', component: ELayoutComponent, children: [
      {
        path: '', component: EMatBreadcrumbComponent, outlet: 'basic', data: { name: 'Breadcrumb', type : 'Custom' }
      }
    ]
  },
  {
    path: 'messagebox', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMessageboxComponent, outlet: 'basic', data: { name: 'Messagebox', type : 'Custom' }
      }
    ]
  },
  {
    path: 'progressbar', component: ELayoutComponent, children: [
      {
        path: '', component: EMatProgressbarComponent, outlet: 'basic', data: { name: 'Progressbar', type : 'Custom' }
      }
    ]
  },
  {
    path: 'switch', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSwitchComponent, outlet: 'basic', data: { name: 'Switch', type : 'Custom' }
      }
    ]
  },
  {
    path: 'toast', component: ELayoutComponent, children: [
      {
        path: '', component: EMatToastComponent, outlet: 'basic', data: { name: 'Toast', type : 'Material' }
      }
    ]
  },
  {
    path: 'tabs', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTabsComponent, outlet: 'basic', data: { name: 'Tabs', type : 'Material' }
      }
    ]
  },
  {
    path: 'accordian', component: ELayoutComponent, children: [
      {
        path: '', component: EMatAccordianComponent, outlet: 'basic', data: { name: 'Accordian', type : 'Material' }
      }
    ]
  },
  {
    path: 'calender', component: ELayoutComponent, children: [
      {
        path: '', component: ECalenderComponent, outlet: 'basic', data: { name: 'Calender', type : 'Material' }
      }
    ]
  },
  {
    path: 'autocomplete', component: ELayoutComponent, children: [
      {
        path: '', component:EMatAutocompleteComponent , outlet: 'basic', data: { name: 'Autocomplete', type : 'Material' }
      }
    ]
  },
  {
    path: 'dualslider', component: ELayoutComponent, children: [
      {
        path: '', component:EDualRangeSliderComponent , outlet: 'basic', data: { name: 'Calender', type : 'Custom' }
      }
    ]
  },
  { path: 'dashboard', component: EDashboardComponent },
  { path: 'layout', component: ELayoutComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'translate', component: ETranslationComponent }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
