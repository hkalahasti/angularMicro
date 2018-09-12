import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatNotificationComponent } from './e-mat-notification.component';

describe('EMatNotificationComponent', () => {
  let component: EMatNotificationComponent;
  let fixture: ComponentFixture<EMatNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
