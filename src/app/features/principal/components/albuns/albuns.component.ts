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
  public posicao = signal(0);
  public posicaoMaxima = signal(10);
  public paginacao: string = '1 / 10';

  public arrayPaginado = computed<IAlbum[]>(() => this.arraysDivididos(this.appStore.arrayDadosApi())[this.posicao()]);

  constructor() { }

  dadosDetalhadoGaleria(albumId: number, dados: any): void{

    this.appStore.updateNumeroAlbumId(albumId);
    this.appStore.updateArrayDadosDetalhados(dados);
    this.router.navigate(['principal', 'albumDetalhado']);
  }

  avancaPaginacao(): void{

    this.posicao() < this.arrayPaginado().length -1 ? this.posicao.update(posicao => posicao += 1): false;
    this.paginacao = this.numeroPaginacao();

  }

  retornaPaginacao(): void{

    this.posicao() > 0 ? this.posicao.update(posicao => posicao -= 1): false;
    this.paginacao = this.numeroPaginacao();

  }

  numeroPaginacao(): string{
    return `${this.posicao() + 1} / ${this.arrayPaginado().length}`
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
