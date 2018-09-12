import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatDropdownComponent } from './e-mat-dropdown.component';

describe('EMatDropdownComponent', () => {
  let component: EMatDropdownComponent;
  let fixture: ComponentFixture<EMatDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
