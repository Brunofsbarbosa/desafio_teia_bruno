import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   component: PrincipalComponent
      // },
      {
        path: '',

        redirectTo: '/principal',
        pathMatch: 'full'
      },
      {
          path: 'principal',
          loadChildren: () => import('./features/principal/principal.module').then(m => m.PrincipalModule),

      },
    ]
},
{ path: '**', redirectTo: '' }
];
