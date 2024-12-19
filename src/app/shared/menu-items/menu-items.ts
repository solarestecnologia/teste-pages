import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'mapear-boleto',
    name: 'Fase 1',
    type: 'link',
    icon: 'tab'
  },
  {
    state: 'mapear-avro',
    type: 'link',
    name: 'Fase 2',
    icon: 'tab'
  },
  {
    state: 'documentacao-avro',
    type: 'link',
    name: 'Fase 3',
    icon: 'tab'
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
