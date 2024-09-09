import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroMedicosPage } from './registro-medicos.page';

describe('RegistroMedicosPage', () => {
  let component: RegistroMedicosPage;
  let fixture: ComponentFixture<RegistroMedicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
