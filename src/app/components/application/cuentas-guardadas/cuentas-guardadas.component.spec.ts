import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasGuardadasComponent } from './cuentas-guardadas.component';

describe('CuentasGuardadasComponent', () => {
  let component: CuentasGuardadasComponent;
  let fixture: ComponentFixture<CuentasGuardadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentasGuardadasComponent]
    });
    fixture = TestBed.createComponent(CuentasGuardadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
