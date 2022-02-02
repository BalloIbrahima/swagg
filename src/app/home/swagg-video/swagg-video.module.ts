import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaggVideoPageRoutingModule } from './swagg-video-routing.module';

import { SwaggVideoPage } from './swagg-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaggVideoPageRoutingModule
  ],
  declarations: [SwaggVideoPage]
})
export class SwaggVideoPageModule {}
