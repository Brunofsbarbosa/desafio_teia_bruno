import { Injectable, signal } from '@angular/core';
import IAlbum from '../../features/principal/models/album.interface';
@Injectable({
    providedIn: 'root'
})
export class AppStore {

  //states ====================================

  public arrayDadosApi = signal<IAlbum[]>([]);
  public arrayDadosDetalhados = signal<IAlbum[]>([]);
  public numeroAlbumId = signal(0)

  //mutations ====================================

  public updateArrayDadosApi(payload: any) {
    this.arrayDadosApi.update(dadosApi => dadosApi = payload);
  }

  public updateArrayDadosDetalhados(payload: any) {
    this.arrayDadosDetalhados.update(dadosApi => dadosApi = payload);
  }

  public updateNumeroAlbumId(payload: any) {
    this.numeroAlbumId.set(payload);
  }








}
