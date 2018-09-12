import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatNavigationComponent } from './e-mat-navigation.component';

describe('EMatNavigationComponent', () => {
  let component: EMatNavigationComponent;
  let fixture: ComponentFixture<EMatNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
