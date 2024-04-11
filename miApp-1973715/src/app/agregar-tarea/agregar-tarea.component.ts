import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TareasServicioService } from '../tareas-servicio.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {
  tarea: any = {
    titulo: '',
    mes: '',
    anio: '',
    descripcion: '', 
    mostrarDescripcion: false
  };

  meses: { nombre: string, valor: string }[] = [
    { nombre: 'Enero', valor: '01' },
    { nombre: 'Febrero', valor: '02' },
    { nombre: 'Marzo', valor: '03' },
    { nombre: 'Abril', valor: '04' },
    { nombre: 'Mayo', valor: '05' },
    { nombre: 'Junio', valor: '06' },
    { nombre: 'Julio', valor: '07' },
    { nombre: 'Agosto', valor: '08' },
    { nombre: 'Septiembre', valor: '09' },
    { nombre: 'Octubre', valor: '10' },
    { nombre: 'Noviembre', valor: '11' },
    { nombre: 'Diciembre', valor: '12' }
  ];

  anios: { anio: string, abreviacion: string }[] = [
    { anio: '2024', abreviacion: '24'},
    { anio: '2025', abreviacion: '25'},
    { anio: '2026', abreviacion: '26'},
    { anio: '2027', abreviacion: '27'},
    { anio: '2028', abreviacion: '28'},
    { anio: '2029', abreviacion: '29'},
    { anio: '2030', abreviacion: '30'},
    { anio: '2031', abreviacion: '31'},
    { anio: '2032', abreviacion: '32'},
  ];

  @Output() tareaAgregada = new EventEmitter<void>();

  constructor( private tareasService: TareasServicioService) { }

  ngOnInit() {}

  agregarTarea() {
    if (this.tarea.titulo && this.tarea.mes && this.tarea.anio && this.tarea.descripcion) {
      this.tareasService.agregarTarea(this.tarea);

      this.tarea = {
        titulo: '',
        mes: '',
        anio: '',
        descripcion: ''
      };

      this.tareaAgregada.emit();

    }
    else
      alert('Por favor, complete todos los campos.');
  }
}
