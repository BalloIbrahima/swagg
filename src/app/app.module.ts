import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { LottieModule } from 'ngx-lottie';


import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


export function playerFactory() {
  return import('lottie-web');
}

const firebaseConfig = {

  apiKey: "AIzaSyAdLbnviIx5DSwajlNyVd6lUoISqRnKsaY",

  authDomain: "swagg-cac98.firebaseapp.com",

  projectId: "swagg-cac98",

  storageBucket: "swagg-cac98.appspot.com",

  messagingSenderId: "150436562801",

  appId: "1:150436562801:web:1b1b9252e14ec3e03c18d0",

  measurementId: "G-13TMGLV2DZ"

};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,SwiperModule,
    LottieModule.forRoot({player:playerFactory}),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
