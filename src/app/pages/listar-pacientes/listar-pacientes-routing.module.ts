import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPacientesPage } from './listar-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPacientesPageRoutingModule {}
