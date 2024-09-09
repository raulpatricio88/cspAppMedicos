import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviarRecetaPageRoutingModule } from './enviar-receta-routing.module';

import { EnviarRecetaPage } from './enviar-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviarRecetaPageRoutingModule
  ],
  declarations: [EnviarRecetaPage]
})
export class EnviarRecetaPageModule {}
