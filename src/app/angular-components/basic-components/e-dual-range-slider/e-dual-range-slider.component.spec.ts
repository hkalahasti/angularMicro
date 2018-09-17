import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDualRangeSliderComponent } from './e-dual-range-slider.component';

describe('EDualRangeSliderComponent', () => {
  let component: EDualRangeSliderComponent;
  let fixture: ComponentFixture<EDualRangeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDualRangeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDualRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
