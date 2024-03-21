import { Component, OnInit, effect, inject } from '@angular/core';
import { AppStore } from '../../../../core/store/app.store';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {

  private appStore = inject(AppStore);

  // public arrayDadosApi = computed(() => this.appStore.arrayDadosApi())

  constructor() {
       effect(()=> console.log('resposta', this.appStore.arrayDadosApi()))

  }

  ngOnInit() {
  }

}
