import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatBreadcrumbComponent } from './e-mat-breadcrumb.component';

describe('EMatBreadcrumbComponent', () => {
  let component: EMatBreadcrumbComponent;
  let fixture: ComponentFixture<EMatBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
