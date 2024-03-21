import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
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
  public posicao = signal(0);
  public posicaoMaxima = signal(10);

  public arrayPaginado = computed<IAlbum[]>(() => this.arraysDivididos(this.appStore.arrayDadosApi())[this.posicao()]);

  constructor() {

    // effect(()=>{ if(this.appStore.arrayDadosApi()){this.posicao.set(0)}})

  }

  dadosDetalhadoGaleria(dados: any){
    this.appStore.updateArrayDadosDetalhados(dados)
    this.router.navigate(['principal', 'albumDetalhado']);
  }

  avancaPaginacao(){

    this.posicao() < this.arrayPaginado().length -1 ? this.posicao.update(posicao => posicao += 1): false;

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
    console.log(arraysDivididos)
    return arraysDivididos
  }

  ngOnInit() {
  }


}
