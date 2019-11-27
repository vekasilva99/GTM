import { TestBed } from '@angular/core/testing';

import { DisponibilidadService } from './disponibilidad.service';

describe('DisponibilidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisponibilidadService = TestBed.get(DisponibilidadService);
    expect(service).toBeTruthy();
  });
});
