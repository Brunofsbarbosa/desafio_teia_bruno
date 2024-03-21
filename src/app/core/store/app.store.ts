import { Injectable, signal } from '@angular/core';
import IAlbum from '../../features/principal/models/album.interface';
@Injectable({
    providedIn: 'root'
})
export class AppStore {

  //states ====================================

  public arrayDadosApi = signal<IAlbum[]>([]);

  //mutations ====================================

  public updateArrayDadosApi(payload: any) {
    this.arrayDadosApi.update(dadosApi => dadosApi = payload);
  }








}
