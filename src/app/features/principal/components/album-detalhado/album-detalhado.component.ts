import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { AppStore } from '../../../../core/store/app.store';
import IAlbum from '../../models/album.interface';

@Component({
  selector: 'app-album-detalhado',
  templateUrl: './album-detalhado.component.html',
  styleUrls: ['./album-detalhado.component.scss']
})
export class AlbumDetalhadoComponent implements OnInit {

  private appStore = inject(AppStore);
  public arrayDadosDetalhados = computed<IAlbum[]>(() => this.appStore.arrayDadosDetalhados() ? this.appStore.arrayDadosDetalhados() : [] as IAlbum[])


  constructor() {
    effect(()=> console.log('detalhados', this.appStore.arrayDadosDetalhados()))
  }

  ngOnInit() {
  }

}
