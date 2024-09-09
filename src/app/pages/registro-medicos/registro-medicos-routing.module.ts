import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroMedicosPage } from './registro-medicos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroMedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroMedicosPageRoutingModule {}
