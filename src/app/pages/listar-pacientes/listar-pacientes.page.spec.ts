import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPacientesPage } from './listar-pacientes.page';

describe('ListarPacientesPage', () => {
  let component: ListarPacientesPage;
  let fixture: ComponentFixture<ListarPacientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
