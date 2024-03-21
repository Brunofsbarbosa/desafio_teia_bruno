import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { AlbunsComponent } from './components/albuns/albuns.component';
import { MaterialModule } from '../../shared/material-module';
import { PrincipalRoutes } from './principal.routing';
import { RouterModule } from '@angular/router';
import { AlbumDetalhadoComponent } from './components/album-detalhado/album-detalhado.component';



@NgModule({
  declarations: [PrincipalComponent, AlbunsComponent, AlbumDetalhadoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(PrincipalRoutes),
  ]
})
export class PrincipalModule { }
