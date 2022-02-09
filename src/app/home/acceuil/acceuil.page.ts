import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

import SwiperCore, { Navigation,Autoplay, Keyboard, Pagination, Scrollbar, Zoom,A11y  } from 'swiper';
SwiperCore.use([Navigation,Pagination, Scrollbar,Autoplay,Keyboard,A11y ]);

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  constructor() { }

  menu_lottie:AnimationOptions={
    path:'assets/json/user-profile.json'
  }

  slideconfig={
    
  }
  ngOnInit() {
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  tab_slide=[
    {
      "mot":"Qui possède un style, du charisme. Cest moi!!",
      "nom":"Swaggeur1",
      "text":"",
      "image":"assets/img/1.jpg"
    },
    {
      "mot":"On dit de quelqu'un ou d'un objet qu'il a du swag!??",
      "nom":"Swaggeur2",
      "text":"",
      "image":"assets/img/2.jpg"
    },
    {
      "mot":"Qui possède un style, du charisme.",
      "nom":"Swaggeur3",

      "text":"",
      "image":"assets/img/3.jpg"
    },
    {
      "mot":" lorsque son look est apprécié, qu'il suit la mode tout",
      "nom":"Swaggeur4",

      "text":"",
      "image":"assets/img/4.jpg"
    },
    {
      "mot":" lorsque ta envis d'apprécié,suit moi",
      "nom":"Swaggeur5",

      "text":"",
      "image":"assets/img/5.jpg"
    },
    {
      "mot":"Qui possède un style, du charisme. Cest moi!!Je suit la mode tout",
      "nom":"Swaggeur5",

      "text":"",
      "image":"assets/img/baba.JPG"
    }
  ]

}
