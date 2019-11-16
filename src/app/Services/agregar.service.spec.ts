import { TestBed } from '@angular/core/testing';

import { AgregarService } from './agregar.service';

describe('AgregarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgregarService = TestBed.get(AgregarService);
    expect(service).toBeTruthy();
  });
});
