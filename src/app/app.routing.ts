import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/mapear-boletos',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'mapear-boletos',
        loadChildren: () => import('./mapear-boletos/mapear-boleto.module').then(m => m.MapearBoletoModule)
      }
    ]
  }
];
