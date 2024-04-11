import { TestBed } from '@angular/core/testing';

import { TareasServicioService } from './tareas-servicio.service';

describe('TareasServicioService', () => {
  let service: TareasServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
