import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPacientesPageRoutingModule } from './listar-pacientes-routing.module';

import { ListarPacientesPage } from './listar-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPacientesPageRoutingModule
  ],
  declarations: [ListarPacientesPage]
})
export class ListarPacientesPageModule {}
