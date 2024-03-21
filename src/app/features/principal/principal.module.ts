import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { AlbunsComponent } from './components/albuns/albuns.component';
import { MaterialModule } from '../../shared/material-module';
import { PrincipalRoutes } from './principal.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PrincipalComponent, AlbunsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(PrincipalRoutes),
  ]
})
export class PrincipalModule { }
