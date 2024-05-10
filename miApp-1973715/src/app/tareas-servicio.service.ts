import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasServicioService {

  tareas: any[] = [];

  private tareaSubject = new BehaviorSubject<any>(null);
  tarea$ = this.tareaSubject.asObservable();

  constructor() { }

  agregarTarea(tarea: any) {
    this.tareaSubject.next(tarea);
    this.tareas.push(tarea);
  }

  eliminarTarea(index: number) {
    this.tareaSubject.next({ index, eliminar: true });
    this.tareas.splice(index, 1);
  }

  getTarea(index: number) {
    return this.tareas[index];
  }
}
