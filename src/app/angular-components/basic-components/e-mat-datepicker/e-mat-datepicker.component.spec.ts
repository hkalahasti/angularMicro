import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatDatePickerComponent } from './e-mat-datepicker.component';

describe('EMatDatePickerComponent', () => {
  let component: EMatDatePickerComponent;
  let fixture: ComponentFixture<EMatDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
