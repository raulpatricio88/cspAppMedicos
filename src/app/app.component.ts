import { Component } from '@angular/core';

interface Opciones {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones: Opciones[]=[
    {
      icon: 'home',
      name: 'Home',
      redirectTo: '/inicio'
    },
    {
      icon: 'book',
      name: 'Registro de Médicos',
      redirectTo: '/registro-medicos'
    },
    {
      icon: 'calendar-number',
      name: 'Listar Pacientes',
      redirectTo: '/listar-pacientes'
    },
    {
      icon: 'bandage',
      name: 'Enviar Receta',
      redirectTo: '/enviar-receta'
    },
    {
      icon: 'power',
      name: 'Cerrar Sesión',
      redirectTo: '/login'
    },
  ]
  constructor() {}
}
