import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatMenuComponent } from './e-mat-menu.component';

describe('EMatMenuComponent', () => {
  let component: EMatMenuComponent;
  let fixture: ComponentFixture<EMatMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
