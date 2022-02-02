import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPublicationPage } from './add-publication.page';

const routes: Routes = [
  {
    path: '',
    component: AddPublicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPublicationPageRoutingModule {}
