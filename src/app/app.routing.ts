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
  EMatMessageboxComponent, EMatNavigationComponent,EMatAccordianComponent, EMatNotificationComponent,
  EMatMapComponent,
  EMatVideoComponent,EMatDropdownComponent
} from './angular-components/basic-components/index';



const routes: Routes = [
  {
    path: 'notification', component: ELayoutComponent, children: [
      {
        path: '', component: EMatNotificationComponent, outlet: 'basic', data: { name: 'Basic Notification' }
      }
    ]
  },
  {
    path: 'map', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMapComponent, outlet: 'basic', data: { name: 'Basic Map' }
      }
    ]
  },
  {
    path: 'video', component: ELayoutComponent, children: [
      {
        path: '', component: EMatVideoComponent, outlet: 'basic', data: { name: 'Basic Video' }
      }
    ]
  },
  {
    path: 'dropdown', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDropdownComponent, outlet: 'basic', data: { name: 'Basic Dropdown' }
      }
    ]
  },
  {
    path: 'navigation', component: ELayoutComponent, children: [
      {
        path: '', component: EMatNavigationComponent, outlet: 'basic', data: { name: 'Basic Navigation' }
      }
    ]
  },
  {
    path: 'datepicker', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDatePickerComponent, outlet: 'basic', data: { name: 'Basic Datepicker' }
      }
    ]
  },
  {
    path: 'timepicker', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTimepickerComponent, outlet: 'basic', data: { name: 'Basic Timepicker' }
      }
    ]
  },
  {
    path: 'dialog', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDialogComponent, outlet: 'basic', data: { name: 'Basic Dialog' }
      }
    ]
  },
  {
    path: 'tooltip', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTooltipComponent, outlet: 'basic', data: { name: 'Basic Tooltip' }
      }
    ]
  },
  {
    path: 'menu', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMenuComponent, outlet: 'basic', data: { name: 'Basic Menu' }
      }
    ]
  },
  {
    path: 'spinner', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSpinnerComponent, outlet: 'basic', data: { name: 'Basic Menu' }
      }
    ]
  },
  {
    path: 'sliders', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSliderComponent, outlet: 'basic', data: { name: 'Basic Slider' }
      }
    ]
  },
  {
    path: 'carousel', component: ELayoutComponent, children: [
      {
        path: '', component: EMatCarouselComponent, outlet: 'basic', data: { name: 'Basic Carousel' }
      }
    ]
  },
  {
    path: 'breadcrumb', component: ELayoutComponent, children: [
      {
        path: '', component: EMatBreadcrumbComponent, outlet: 'basic', data: { name: 'Basic Breadcrumb' }
      }
    ]
  },
  {
    path: 'messagebox', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMessageboxComponent, outlet: 'basic', data: { name: 'Basic Messagebox' }
      }
    ]
  },
  {
    path: 'progressbar', component: ELayoutComponent, children: [
      {
        path: '', component: EMatProgressbarComponent, outlet: 'basic', data: { name: 'Basic Progressbar' }
      }
    ]
  },
  {
    path: 'switch', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSwitchComponent, outlet: 'basic', data: { name: 'Basic Switch' }
      }
    ]
  },
  {
    path: 'toast', component: ELayoutComponent, children: [
      {
        path: '', component: EMatToastComponent, outlet: 'basic', data: { name: 'Basic Toast' }
      }
    ]
  },
  {
    path: 'tabs', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTabsComponent, outlet: 'basic', data: { name: 'Basic Tabs' }
      }
    ]
  },
  {
    path: 'accordian', component: ELayoutComponent, children: [
      {
        path: '', component: EMatAccordianComponent, outlet: 'basic', data: { name: 'Basic Mat Accordian' }
      }
    ]
  },
  { path: 'dashboard', component: EDashboardComponent },
  { path: 'layout', component: ELayoutComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'translate', component: ETranslationComponent }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
