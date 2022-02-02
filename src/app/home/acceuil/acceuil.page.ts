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
      "nom":"test1",
      "text":"",
      "image":"assets/img/1.jpg"
    },
    {
      "nom":"test2",
      "text":"",
      "image":"assets/img/2.jpg"
    },
    {
      "nom":"test3",

      "text":"",
      "image":"assets/img/3.jpg"
    },
    {
      "nom":"test4",

      "text":"",
      "image":"assets/img/4.jpg"
    },
    {
      "nom":"test4",

      "text":"",
      "image":"assets/img/5.jpg"
    },
    {
      "nom":"test4",

      "text":"",
      "image":"assets/img/baba.JPG"
    }
  ]

}
