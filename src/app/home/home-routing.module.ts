import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'acceuil',
        loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule)
      },
      {
        path: 'new_pub',
        loadChildren: () => import('./add-publication/add-publication.module').then( m => m.AddPublicationPageModule)
      },
      {
        path: 'swagg_short',
        loadChildren: () => import('./swagg-video/swagg-video.module').then( m => m.SwaggVideoPageModule)
      },
      {
        path: '',
        redirectTo: '/home/acceuil',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: 'acceuil',
  //   loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  // },
  // {
  //   path: 'add-publication',
  //   loadChildren: () => import('./add-publication/add-publication.module').then( m => m.AddPublicationPageModule)
  // },
  // {
  //   path: 'swagg-video',
  //   loadChildren: () => import('./swagg-video/swagg-video.module').then( m => m.SwaggVideoPageModule)
  // },
  // ,
  {
    path: '',
    redirectTo: '/home/acceuil',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
