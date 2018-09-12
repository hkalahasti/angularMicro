
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESideNavComponent } from './e-sidenav.component';

describe('MyNavComponent', () => {
  let component: ESideNavComponent;
  let fixture: ComponentFixture<ESideNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ESideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
