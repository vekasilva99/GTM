import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTipoDestinoComponent } from './modificar-tipo-destino.component';

describe('ModificarTipoDestinoComponent', () => {
  let component: ModificarTipoDestinoComponent;
  let fixture: ComponentFixture<ModificarTipoDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarTipoDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTipoDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
