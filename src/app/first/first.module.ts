import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstPageRoutingModule } from './first-routing.module';

import { FirstPage } from './first.page';
import { LottieModule } from 'ngx-lottie';
export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstPageRoutingModule,
    LottieModule.forRoot({player:playerFactory}),
  ],
  declarations: [FirstPage]
})
export class FirstPageModule {}
