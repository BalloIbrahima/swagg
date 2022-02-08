import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { SwaggeurService } from '../services/swaggeur/swaggeur.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {
  bac="assets/img/african-fashion-2719554.png";
  swg:AnimationOptions={
    path:'assets/json/snooped.json'
  }
  constructor(public swg_sevice:SwaggeurService,public router:Router) { }

  ngOnInit() {
    if(this.swg_sevice.verifier()){
      this.router.navigate(['/home'])

    }
  }



  continiue(){
    this.router.navigate(['/home'])
  }

  registration(){
    // this.router.navigate(['/home'])
  }

  login(){
    // this.router.navigate(['/home'])
  }


  google(){
    console.log("google")
  }
  facebook(){
    console.log("face")
  }
  snapchat(){
    console.log("snap")
  
  }
  instagram(){
    console.log("insta")

  }
  tiktok(){
    console.log("tiktok")

  }


}
