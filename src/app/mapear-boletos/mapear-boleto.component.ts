import { Component, AfterViewInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DemoMaterialModule } from 'src/app/material-module';
import {FormsModule} from '@angular/forms';


@Component({
	selector: 'app-mapear-boleto',
	standalone: true,
	imports: [FormsModule, MatFormFieldModule, MatInputModule,DemoMaterialModule],
	templateUrl: './mapear-boleto.component.html'
})
export class MapearBoletoComponent  {

  onSubmit() {
    // Lógica para lidar com o envio do formulário
    console.log('Formulário enviado');
  }

}
