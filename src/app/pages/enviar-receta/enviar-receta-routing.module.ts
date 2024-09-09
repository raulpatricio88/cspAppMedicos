import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviarRecetaPage } from './enviar-receta.page';

const routes: Routes = [
  {
    path: '',
    component: EnviarRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviarRecetaPageRoutingModule {}
