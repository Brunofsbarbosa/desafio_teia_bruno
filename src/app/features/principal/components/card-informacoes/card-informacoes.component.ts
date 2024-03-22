import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-informacoes',
  templateUrl: './card-informacoes.component.html',
  styleUrls: ['./card-informacoes.component.scss']
})
export class CardInformacoesComponent implements OnInit {

  public boasVindas: string = 'Bem Vinda(a)!';
  public subtitulo: string = 'A sua galeria de fotos Online';
  public descricao: string = 'Explore 5.000 fotografias e 100 álbuns. Navegue por uma interface intuitiva que te leva aos álbuns que você deseja visitar com facilidade.';


  constructor() { }

  ngOnInit() {
  }

}
