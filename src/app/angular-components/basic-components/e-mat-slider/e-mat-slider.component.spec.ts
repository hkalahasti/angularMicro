import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatSliderComponent } from './e-mat-slider.component';

describe('EMatSliderComponent', () => {
  let component: EMatSliderComponent;
  let fixture: ComponentFixture<EMatSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
