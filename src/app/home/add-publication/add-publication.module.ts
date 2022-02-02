import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPublicationPageRoutingModule } from './add-publication-routing.module';

import { AddPublicationPage } from './add-publication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPublicationPageRoutingModule
  ],
  declarations: [AddPublicationPage]
})
export class AddPublicationPageModule {}
