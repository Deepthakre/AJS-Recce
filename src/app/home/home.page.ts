import { Component,OnInit} from '@angular/core';
// import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  
  constructor(private router:Router) {}  

  // @ViewChild('yearSlider', { static: true })
  // yearSlider!: typeof IonSlides;
  // years = [2010, 2011, 2012, 2013, 2014, 2015];
  // selectedYear: number = this.years[0];
  // slideOpts = {
  //   initialSlide: 3,
  //   speed: 400,
  //   slidesPerView: 3,
  //   centeredSlides: true
  // };
  // selectedIndex: number = this.years[0];
  // months: string[] = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December'
  // ];
  

  ngOnInit() {
  }
  // prevSlide() {
  //   this.yearSlider.slidePrev();
  // }

  // nextSlide() {
  //   this.yearSlider.slideNext();
  // }

  // onSlideChanged() {
  //   this.yearSlider.getActiveIndex().then((index: number) => {
  //     this.selectedIndex = index;

  //   });
  // }
 
  
  // showPreviousYear() {
  //   const currentIndex = this.years.indexOf(this.selectedYear);
  //   if (currentIndex > 0) {
  //     this.selectedYear = this.years[currentIndex - 1];
  //   }
  // }

  // showNextYear() {
  //   const currentIndex = this.years.indexOf(this.selectedYear);
  //   if (currentIndex < this.years.length - 1) {
  //     this.selectedYear = this.years[currentIndex + 1];
  //   }
  // }


  buttonText: string = "Punch In";

  changeButtonText() {
    this.buttonText = (this.buttonText === "Punch In") ? "Punch Out" : "Punch In";
  }
  getLogout(){
    this.router.navigateByUrl('/sign-in');
    }
}

