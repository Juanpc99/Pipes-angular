import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    this.nombre = 'Juan';
    this.genero = 'masculino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue pipe

  persona  = {
    nombre: 'Juan',
    edad: 22,
    direccion: 'Palmira, Valle del cauca'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'BatMan',
      vuela: false,
    },
    {
      nombre: 'Robin',
      vuela: false,
    }
  ]

  //Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  });

}
