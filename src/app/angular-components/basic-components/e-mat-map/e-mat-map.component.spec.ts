import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatMapComponent } from './e-mat-map.component';

describe('EMatMapComponent', () => {
  let component: EMatMapComponent;
  let fixture: ComponentFixture<EMatMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
