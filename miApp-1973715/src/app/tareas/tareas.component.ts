import { Component, OnInit } from '@angular/core';
import { TareasServicioService } from '../tareas-servicio.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {
  tareas: any[] = [];

  constructor( public tareasService: TareasServicioService) { }

  ngOnInit() {
    this.tareasService.tarea$.subscribe((accion: any) => {
      if (accion) {
        if (accion.eliminar) {
          this.eliminarTarea(accion.index);
        } else {
          this.tareas.push(accion);
        }
      }
    });
  }

  toggleDescripcion(tarea: any) {
    tarea.mostrarDescripcion = !tarea.mostrarDescripcion;
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
