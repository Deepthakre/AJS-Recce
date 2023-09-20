import { NgModule,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'details1',
    loadChildren: () => import('./pages/details1/details1.module').then( m => m.Details1PageModule)
  },
  {
    path: 'my-attendance',
    loadChildren: () => import('./pages/my-attendance/my-attendance.module').then( m => m.MyAttendancePageModule)
  },
  {
    path: 'rough',
    loadChildren: () => import('./rough/rough.module').then( m => m.RoughPageModule)
  },
  
];

@NgModule({
  imports: [IonicModule,CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class AppRoutingModule { }
