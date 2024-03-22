import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-informacoes',
  templateUrl: './card-informacoes.component.html',
  styleUrls: ['./card-informacoes.component.scss']
})
export class CardInformacoesComponent implements OnInit {


  urlFoto: string = './assets/img/img.svg';

  constructor() { }

  ngOnInit() {
  }

}
