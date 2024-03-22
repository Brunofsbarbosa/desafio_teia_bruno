import { Injectable, inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { HttpService } from '../../core/http/http.service';
import { environment } from '../../../environments/environment.prod';
import { AppStore } from '../../core/store/app.store';
import IAlbum from './models/album.interface';
import { retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private httpService = inject(HttpService);
  private appStore = inject(AppStore);

constructor() { }

retornaArrayDadosApi(){

  return this.httpService.get(environment.API_URL, { observe: 'response' })
  .pipe(retry(3))
  .subscribe({
    next: (resp: HttpResponse<any>) => {this.transformaArrayDadosApi(resp.body);},
    error: (error: any) => {console.error('error-retornaArrayDadosApi', error);}
  });
}

transformaArrayDadosApi(dados: Array<IAlbum>) {

  const transformedArray = [...new Set(dados.map((item: any) => item.albumId))].map(albumId => ({

    albumId: albumId,
    dados: dados.filter((item: any) => item.albumId === albumId)

  }));

  this.appStore.updateArrayDadosApi(transformedArray);

}
}
