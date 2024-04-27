import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasServicioService {

  private tareaSubject = new BehaviorSubject<any>(null);
  tarea$ = this.tareaSubject.asObservable();

  constructor() { }

  agregarTarea(tarea: any) {
    this.tareaSubject.next(tarea);
  }

  eliminarTarea(index: number) {
    this.tareaSubject.next({ index, eliminar: true });
  }
}
