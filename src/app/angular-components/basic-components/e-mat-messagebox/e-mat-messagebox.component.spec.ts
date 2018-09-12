import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatMessageboxComponent } from './e-mat-messagebox.component';

describe('EMatMessageboxComponent', () => {
  let component: EMatMessageboxComponent;
  let fixture: ComponentFixture<EMatMessageboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatMessageboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatMessageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
