import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
@Component({
  selector: 'app-my-attendance',
  templateUrl: './my-attendance.page.html',
  styleUrls: ['./my-attendance.page.scss'],
})
export class MyAttendancePage implements OnInit {
  // @ViewChild('monthSlides', { static: true }) slides: IonSlides;
  // selectedMonth!: string;
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
  // isFirstSlide: boolean = true;
  // isLastSlide: boolean = false;

  // slideOptions = {
  //   initialSlide: 0,
  //   speed: 400
  // };

   constructor() { }

   ngOnInit() {
   }
  // slidePrev() {
  //   this.slides.slidePrev();
  // }

  // slideNext() {
  //   this.slides.slideNext();
  // }

  // async ionSlideDidChange() {
  //   const activeIndex = await this.slides.getActiveIndex();
  //   this.isFirstSlide = activeIndex === 0;
  //   this.isLastSlide = activeIndex === this.months.length - 1;
  // }
}
