import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatAccordianComponent } from './e-mat-accordian.component';

describe('EMatAccordianComponent', () => {
  let component: EMatAccordianComponent;
  let fixture: ComponentFixture<EMatAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
