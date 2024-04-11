import { Component, OnInit } from '@angular/core';
import { TareasServicioService } from '../tareas-servicio.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {
  tareas: any[] = [];

  constructor( private tareasService: TareasServicioService) { }

  ngOnInit() {
    this.tareasService.tarea$.subscribe( tarea => {
      if (tarea) 
        this.tareas.push(tarea);
    });
  }

  toggleDescripcion(tarea: any) {
    tarea.mostrarDescripcion = !tarea.mostrarDescripcion;
  }
}
