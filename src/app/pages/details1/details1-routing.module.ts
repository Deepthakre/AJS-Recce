import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Details1Page } from './details1.page';

const routes: Routes = [
  {
    path: '',
    component: Details1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Details1PageRoutingModule {}
