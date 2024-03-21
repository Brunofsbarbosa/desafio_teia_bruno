import { Component, OnInit, computed, effect, inject } from '@angular/core';

import { HomeService } from './home.service';
import { AppStore } from '../../core/store/app.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private homeService = inject(HomeService);
  private appStore = inject(AppStore);

  public arrayDadosApi = computed(() => this.appStore.arrayDadosApi())

  constructor() {
    // effect(()=> console.log('resposta', this.appStore.arrayDadosApi()))
  }

  ngOnInit() {
    this.homeService.retornaArrayDadosApi()
  }

}
