import { Routes } from '@angular/router';
import { MapearBoletoComponent } from '../mapear-boletos/mapear-boleto.component';
import { MapearAvroComponent } from './mapear-avro/mapear-avro.component';
import { DocumentacaoAvroComponent } from './documentacao-avro/documentacao-avro.component';

export const MaterialRoutes: Routes = [
  {
    path: 'mapear-boleto',
    component: MapearBoletoComponent
  },
  {
    path: 'mapear-avro',
    component: MapearAvroComponent
  },
  {
    path: 'documentacao-avro',
    component: DocumentacaoAvroComponent
  }
];
