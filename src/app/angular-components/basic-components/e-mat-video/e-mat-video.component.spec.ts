import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatVideoComponent } from './e-mat-video.component';

describe('EMatVideoComponent', () => {
  let component: EMatVideoComponent;
  let fixture: ComponentFixture<EMatVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
