import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { AppStore } from '../../../../core/store/app.store';
import IAlbum from '../../models/album.interface';
import { routes } from '../../../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {

  private appStore = inject(AppStore);
  private router = inject(Router);
  urlFoto: string = './assets/img/img.svg';


  public arrayDadosApi = computed<IAlbum[]>(() => this.appStore.arrayDadosApi() ? this.appStore.arrayDadosApi() : [] as IAlbum[])

  constructor() {
       effect(()=> console.log('resposta', this.appStore.arrayDadosApi()))

  }

  dadosDetalhadoGaleria(dados: any){
    console.log('cheguei', dados)
    this.router.navigate(['principal', 'albumDetalhado']);
  }

  ngOnInit() {
  }

}
