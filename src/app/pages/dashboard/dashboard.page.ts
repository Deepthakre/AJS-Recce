import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
//   slider: any;
//   slideOptions = {
//   initialSlide: 0,
//   slidesPerView: 1,
//   autoplay: true
// };
// slideOpts = {
//   slidesPerView: 2,
//   spaceBetween: 8,
//   // speed: 400,
//   // initialSlide: 1.5,
//   autoplay: true
// };
slideOptions = {
  initialSlide: 0,
  slidesPerView: 1,
};
slider: any;


  constructor(private alertController: AlertController) { }

  ngOnInit() {
    

  }
  slideChanged()
  {
     this.slider.stopAutoplay();
     }
    //  slideOpts = {
    //   initialSlide: 1,
    //   speed: 400
    // };
    
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: 'This is an alert!',
        buttons: ['OK'],
      });
  
      await alert.present();
    }

    buttonText: string = "Punch In";

    changeButtonText() {
      this.buttonText = (this.buttonText === "Punch In") ? "Punch Out" : "Punch In";
    }
}
