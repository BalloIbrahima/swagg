import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';

import { FirstPage } from './first.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class FirstPageRoutingModule {}
