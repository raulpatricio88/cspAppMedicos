import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnviarRecetaPage } from './enviar-receta.page';

describe('EnviarRecetaPage', () => {
  let component: EnviarRecetaPage;
  let fixture: ComponentFixture<EnviarRecetaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
