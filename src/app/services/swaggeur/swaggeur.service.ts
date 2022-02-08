import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwaggeurService {

  swaggeur:any=null;


  verifier(){
    try {
      this.swaggeur = JSON.parse(localStorage.getItem("swagg_swaggeur"));
    } catch (error) {

    }
    if(this.swaggeur==null){
      return false
    }else{
      console.log(this.swaggeur)
      return true;
    }
  }


  constructor() { }
}
