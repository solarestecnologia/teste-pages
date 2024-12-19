import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../material-module';
import { MapearBoletoComponent } from './mapear-boleto.component';
import { MapearBoletoRoutes } from './mapear-boleto.routing';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(MapearBoletoRoutes),
    MapearBoletoComponent,
  ],
})
export class MapearBoletoModule { }
