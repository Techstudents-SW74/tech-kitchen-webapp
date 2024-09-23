import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderApplicationComponent } from './header-application.component';

describe('HeaderApplicationComponent', () => {
  let component: HeaderApplicationComponent;
  let fixture: ComponentFixture<HeaderApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderApplicationComponent]
    });
    fixture = TestBed.createComponent(HeaderApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
