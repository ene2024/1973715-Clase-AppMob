import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  flag: boolean = true;

  tarjetas = [
    {
      nombre: 'Melanie Mishel Garza V',
      numero: 4519513307990830,
      vigenciaInicio: '08',
      vigenciaFin: '27',
      CVV: '088'
    },
    {
      nombre: 'Arturo Alejandro Arellano',
      numero: 4519513307990830,
      vigenciaInicio: '08',
      vigenciaFin: '27',
      CVV: '088'
    },
    {
      nombre: 'Cesar Daniel Vidal',
      numero: 4519513307990830,
      vigenciaInicio: '08',
      vigenciaFin: '27',
      CVV: '088'
    }
  ];
}
