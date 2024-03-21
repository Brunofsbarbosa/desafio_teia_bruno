import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { AppStore } from '../../../../core/store/app.store';
import IAlbum from '../../models/album.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-detalhado',
  templateUrl: './album-detalhado.component.html',
  styleUrls: ['./album-detalhado.component.scss']
})
export class AlbumDetalhadoComponent implements OnInit {

  private appStore = inject(AppStore);
  private router = inject(Router);

  public posicao = signal(0);
  public posicaoMaxima = signal(10);
  public tamanhoArrayDividido: number = 0;

  // public arrayDadosDetalhados = computed<IAlbum[]>(() => this.appStore.arrayDadosDetalhados() ? this.appStore.arrayDadosDetalhados() : [] as IAlbum[])
  public arrayDadosDetalhadosPaginado = computed<IAlbum[]>(() => this.arraysDivididos(this.appStore.arrayDadosDetalhados())[this.posicao()]);



  constructor() {
    // effect(()=> console.log('detalhados', this.appStore.arrayDadosDetalhados()))
    this.appStore.arrayDadosDetalhados().length > 0 ? true : this.router.navigate(['principal']);
  }

  avancaPaginacao(){

    this.posicao() < this.tamanhoArrayDividido -1 ? this.posicao.update(posicao => posicao += 1): false;

  }

  retornaPaginacao(){

    this.posicao() > 0 ? this.posicao.update(posicao => posicao -= 1): false;

  }

  arraysDivididos(array: any): Array<any>{

    const arrayOriginal = array;
    const arraysDivididos = [];

    for (let i = 0; i < arrayOriginal.length; i += this.posicaoMaxima()) {
      const arrayParcial = arrayOriginal.slice(i, i + this.posicaoMaxima());
      arraysDivididos.push(arrayParcial);
    }

    this.tamanhoArrayDividido = arraysDivididos.length
    return arraysDivididos
  }

  ngOnInit() {
  }

}
