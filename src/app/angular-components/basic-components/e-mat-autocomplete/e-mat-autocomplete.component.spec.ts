import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatAutocompleteComponent } from './e-mat-autocomplete.component';

describe('EMatAutocompleteComponent', () => {
  let component: EMatAutocompleteComponent;
  let fixture: ComponentFixture<EMatAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
