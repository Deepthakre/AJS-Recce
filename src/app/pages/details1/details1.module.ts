import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Details1PageRoutingModule } from './details1-routing.module';

import { Details1Page } from './details1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Details1PageRoutingModule
  ],
  declarations: [Details1Page]
})
export class Details1PageModule {}
