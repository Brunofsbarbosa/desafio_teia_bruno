import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';
// import { AlbunsDetalhadosComponent } from './components/albuns/albuns-detalhados/albuns-detalhados.component';
import { AlbunsComponent } from './components/albuns/albuns.component';
import { AlbumDetalhadoComponent } from './components/album-detalhado/album-detalhado.component';

export const PrincipalRoutes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: PrincipalComponent,
    },
    // {
    //   path: '/album',
    //   component: AlbunsComponent
    // },
    {
      path: 'albumDetalhado',
      component: AlbumDetalhadoComponent
    },

  ]
}];
