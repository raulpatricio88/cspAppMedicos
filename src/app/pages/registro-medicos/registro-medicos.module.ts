import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroMedicosPageRoutingModule } from './registro-medicos-routing.module';

import { RegistroMedicosPage } from './registro-medicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMedicosPageRoutingModule
  ],
  declarations: [RegistroMedicosPage]
})
export class RegistroMedicosPageModule {}
