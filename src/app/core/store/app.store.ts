import { Injectable, signal } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class AppStore {

  //states ====================================

  public arrayDadosApi = signal([]);

  //mutations ====================================

  public updateArrayDadosApi(payload: any) {
    this.arrayDadosApi.update(dadosApi => dadosApi = payload);
  }








}
