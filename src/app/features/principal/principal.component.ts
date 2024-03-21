import { Component, OnInit, inject } from '@angular/core';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  private principalService = inject(PrincipalService);

  constructor() { }

  ngOnInit() {
    this.principalService.retornaArrayDadosApi()
  }


}
