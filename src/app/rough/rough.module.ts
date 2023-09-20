import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoughPageRoutingModule } from './rough-routing.module';

import { RoughPage } from './rough.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoughPageRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [RoughPage]
})
export class RoughPageModule {}
