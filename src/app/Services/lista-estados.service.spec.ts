import { TestBed } from '@angular/core/testing';

import { ListaEstadosService } from './lista-estados.service';

describe('ListaEstadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaEstadosService = TestBed.get(ListaEstadosService);
    expect(service).toBeTruthy();
  });
});
