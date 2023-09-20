import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-rough',
  templateUrl: './rough.page.html',
  styleUrls: ['./rough.page.scss'],
})
export class RoughPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = [
    {
      
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit,',
      location: 'Lorem ipsum',
      imageUrl: '/assets/images/img.png',
    }, ];

    buttonText: string = "Punch In";

  changeButtonText() {
    this.buttonText = (this.buttonText === "Punch In") ? "Punch Out" : "Punch In";
  }
  getLogout(){
    // this.router.navigateByUrl('/sign-in');
    }
}


