import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAttendancePageRoutingModule } from './my-attendance-routing.module';

import { MyAttendancePage } from './my-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAttendancePageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [MyAttendancePage]
})
export class MyAttendancePageModule {}
