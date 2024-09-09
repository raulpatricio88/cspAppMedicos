import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar-receta',
  templateUrl: './enviar-receta.page.html',
  styleUrls: ['./enviar-receta.page.scss'],
})
export class EnviarRecetaPage implements OnInit {

  constructor(private alertcontroller: AlertController,
              private router:Router) { }

  ngOnInit() {
  }

  async enviar(){
    const alert = await this.alertcontroller.create({
      header: 'Receta enviada!',
      //para que ambas alertas se vean como en iOS
      mode:'ios',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('El usuario ha enviado la receta')
            //this.router.navigate(['/alert']); //permite navegar hacia otro page
          },
        },
      ],
    });

    await alert.present();
  }
}
