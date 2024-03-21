import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  public readonly texto: string = 'Desenvolvindo por: Bruno Felipe de Souza Barbosa (c112954)';
  public anoAtual: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
