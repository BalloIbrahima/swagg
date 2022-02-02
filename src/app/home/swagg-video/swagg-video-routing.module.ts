import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaggVideoPage } from './swagg-video.page';

const routes: Routes = [
  {
    path: '',
    component: SwaggVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaggVideoPageRoutingModule {}
