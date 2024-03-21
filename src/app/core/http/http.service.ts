import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import IHttp from './models/http.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements IHttp {

  private url: string = '';
  private httpClient = inject(HttpClient);

  // Requisição GET
  get(endPoint: string, options?: any): Observable<any> {
    return this.httpClient.get(this.url + endPoint, options);
  }

  // Requisição POST
  post(endPoint: string, body: any, options?: any): Observable<any> {
    return this.httpClient.post(this.url + endPoint, body, options);
  }

  // Requisição PUT
  put(endPoint: string, body: any, options?: any): Observable<any> {
    return this.httpClient.put(this.url + endPoint, body, options);
  }

  // Requisição DELETE
  delete(endPoint: string, options?: any): Observable<any> {
    return this.httpClient.delete(this.url + endPoint, options);
  }
}

