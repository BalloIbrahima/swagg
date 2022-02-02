import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyComptePage } from './my-compte.page';

const routes: Routes = [
  {
    path: '',
    component: MyComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyComptePageRoutingModule {}
