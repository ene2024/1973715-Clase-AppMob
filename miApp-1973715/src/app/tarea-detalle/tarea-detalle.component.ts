import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasServicioService } from '../tareas-servicio.service';

@Component({
  selector: 'app-tarea-detalle',
  templateUrl: './tarea-detalle.component.html',
  styleUrls: ['./tarea-detalle.component.scss'],
})
export class TareaDetalleComponent  implements OnInit {

  tarea: any;

  constructor(private route: ActivatedRoute, private TareasServicio: TareasServicioService ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const index = +params['index'];
      this.tarea = this.TareasServicio.getTarea(index);
    })
  }

}
