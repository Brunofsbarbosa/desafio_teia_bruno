import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { AlbunsComponent } from './components/albuns/albuns.component';
import { MaterialModule } from '../../shared/material-module';
import { PrincipalRoutes } from './principal.routing';
import { RouterModule } from '@angular/router';
import { AlbumDetalhadoComponent } from './components/album-detalhado/album-detalhado.component';
import { FormsModule } from '@angular/forms';
import { CardInformacoesComponent } from './components/card-informacoes/card-informacoes.component';



@NgModule({
  declarations: [PrincipalComponent, AlbunsComponent, AlbumDetalhadoComponent, CardInformacoesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(PrincipalRoutes),
    FormsModule
  ]
})
export class PrincipalModule { }
