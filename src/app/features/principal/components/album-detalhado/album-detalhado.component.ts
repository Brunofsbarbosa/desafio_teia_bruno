import { Component, OnInit, Signal, computed, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AppStore } from '../../../../core/store/app.store';
import IAlbum from '../../models/album.interface';
import { Utils } from '../../../../shared/utils.ts/utils';

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
  public textoInput: string = '';
  public textoFiltroDocumentos = signal('');
  public corBorda: string = '#005CA9';
  public ordemCrescente = signal(false);
  public urlImg: string = './assets/img/triangulo-laranja.svg'

  public numeroAlbumId = computed(() => this.appStore.numeroAlbumId());
  public arrayDadosDetalhadosPaginado = computed<IAlbum[]>(() => {

    const arrayDadosFiltroInput = this.retornaArrayFiltrado(this.appStore.arrayDadosDetalhados());
    const arrayDadosOrdenados = this.retornaArrayOrdenado(arrayDadosFiltroInput);
    const arrayDadosDividido = this.arraysDivididos(arrayDadosOrdenados)[this.posicao()];
    return arrayDadosDividido;

  });

  constructor() {

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

  retornaArrayFiltrado(array: IAlbum[]){

    const arrayFiltrado = this.textoFiltroDocumentos().length > 0 ?
    array.filter(e => e.id == Utils.normalizarTexto(this.textoFiltroDocumentos()) || Utils.normalizarTexto(e.title).includes(Utils.normalizarTexto(this.textoFiltroDocumentos())))
    : array;

    return arrayFiltrado;
  }

  limparInput() {

    this.textoInput = '';
    this.textoFiltroDocumentos.set(this.textoInput);
  }

  atualizaTextoParaFiltro(){

    this.textoFiltroDocumentos.set(this.textoInput);
  }

  retornaArrayOrdenado(arrayDados: IAlbum[]){

    return arrayDados.sort((a: any, b: any) => this.ordemCrescente() ?  b.id - a.id : a.id - b.id);
  }

  alteraOrdenacaoDadosArray() {

    this.ordemCrescente.set(!this.ordemCrescente());

  }

  ngOnInit() {
  }

}
