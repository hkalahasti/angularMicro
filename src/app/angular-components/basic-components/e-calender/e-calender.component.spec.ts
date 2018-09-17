import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECalenderComponent } from './e-calender.component';

describe('ECalenderComponent', () => {
  let component: ECalenderComponent;
  let fixture: ComponentFixture<ECalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
