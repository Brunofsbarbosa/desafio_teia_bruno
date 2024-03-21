import { Injectable, inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { HttpService } from '../../core/http/http.service';
import { environment } from '../../../environments/environment.prod';
import { AppStore } from '../../core/store/app.store';


@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private httpService = inject(HttpService);
  private appStore = inject(AppStore);

constructor() { }

retornaArrayDadosApi(){

  return this.httpService.get(environment.API_URL, { observe: 'response' })
  .subscribe({
    next: (resp: HttpResponse<any>) => {this.appStore.updateArrayDadosApi(resp);},
    error: (error: any) => {console.error('error-retornaArrayDadosApi', error);}
  });
}

}
