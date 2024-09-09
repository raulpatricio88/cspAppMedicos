import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'listar-pacientes',
    loadChildren: () => import('./pages/listar-pacientes/listar-pacientes.module').then( m => m.ListarPacientesPageModule)
  },
  {
    path: 'registro-medicos',
    loadChildren: () => import('./pages/registro-medicos/registro-medicos.module').then( m => m.RegistroMedicosPageModule)
  },
  {
    path: 'enviar-receta',
    loadChildren: () => import('./pages/enviar-receta/enviar-receta.module').then( m => m.EnviarRecetaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
