import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatCarouselComponent } from './e-mat-carousel.component';

describe('EMatCarouselComponent', () => {
  let component: EMatCarouselComponent;
  let fixture: ComponentFixture<EMatCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
