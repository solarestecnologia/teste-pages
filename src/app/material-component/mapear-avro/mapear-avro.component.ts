import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoMaterialModule } from 'src/app/material-module';

@Component({
  selector: 'app-mapear-avro',
  standalone: true,
  templateUrl: './mapear-avro.component.html',
  imports:[DemoMaterialModule, MatTabsModule],
  styleUrls: ['./mapear-avro.component.scss']
})
export class MapearAvroComponent {

}
