import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-medicos',
  templateUrl: './registro-medicos.page.html',
  styleUrls: ['./registro-medicos.page.scss'],
})
export class RegistroMedicosPage implements OnInit {

  constructor(private alertcontroller: AlertController,
              private router:Router) { }

  ngOnInit() {
  }

  async enviar(){
    const alert = await this.alertcontroller.create({
      header: 'Médico Registrado!',
      //para que ambas alertas se vean como en iOS
      mode:'ios',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('El medico se ha registrado')
            //this.router.navigate(['/alert']); //permite navegar hacia otro page
          },
        },
      ],
    });

    await alert.present();
  }

}
