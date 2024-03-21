import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';

export const PrincipalRoutes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: PrincipalComponent,
    },
    // {
    //   path: 'buscaPropostas',
    //   component: BuscarPropostasComponent
    // },

  ]
}];
