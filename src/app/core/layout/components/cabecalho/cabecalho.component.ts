import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  public readonly imgLogoCaixa: string = "assets/img/logo_caixa_branco.png";
  public readonly nomePrograma: string = 'Teia';
  public readonly nomeDesafio: string = 'Desafio FrontEnd';

  constructor() { }

  ngOnInit() {
  }

}
