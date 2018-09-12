import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatDialogComponent } from './e-mat-dialog.component';

describe('EMatDialogComponent', () => {
  let component: EMatDialogComponent;
  let fixture: ComponentFixture<EMatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
