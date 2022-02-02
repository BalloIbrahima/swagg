import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceuilPageRoutingModule } from './acceuil-routing.module';

import { AcceuilPage } from './acceuil.page';
import { SwiperModule } from 'swiper/angular';
import { LottieModule } from 'ngx-lottie';
export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilPageRoutingModule,
    SwiperModule,
    LottieModule.forRoot({player:playerFactory}),

  ],
  declarations: [AcceuilPage]
})
export class AcceuilPageModule {}
