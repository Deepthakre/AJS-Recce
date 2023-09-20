import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private alertController: AlertController,public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Profile Info',
  //     subHeader: 'Name:Mayur  ',
  //    message: 'mobile number:934567667777',
  //     buttons: ['OK'],
  //   });

  //   await alert.present();
  // }
  buttonText: string = "Punch In";

  changeButtonText() {
    this.buttonText = (this.buttonText === "Punch In") ? "Punch Out" : "Punch In";
  }
  passwordType: string = 'password';
 passwordIcon: string = 'eye-off';

 hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }
 ionViewWillEnter() {
  this.menuCtrl.enable(false);
 }
} 
