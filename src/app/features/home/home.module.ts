import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AlbunsComponent } from './components/albuns/albuns.component';



@NgModule({
  declarations: [HomeComponent, AlbunsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
