import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Susana';
  genero: string = 'femenino';


  // i18nSelect
  invitacionMapa = {
    'masculino': 'inivtarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Juan', 'Maria', 'Carlos', 'Camilo', 'Ramiro']
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
}
