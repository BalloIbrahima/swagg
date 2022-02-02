import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyComptePageRoutingModule } from './my-compte-routing.module';

import { MyComptePage } from './my-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyComptePageRoutingModule
  ],
  declarations: [MyComptePage]
})
export class MyComptePageModule {}
