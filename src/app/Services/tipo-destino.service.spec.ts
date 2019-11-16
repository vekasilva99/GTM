import { TestBed } from '@angular/core/testing';

import { TipoDestinoService } from './tipo-destino.service';

describe('TipoDestinoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoDestinoService = TestBed.get(TipoDestinoService);
    expect(service).toBeTruthy();
  });
});
