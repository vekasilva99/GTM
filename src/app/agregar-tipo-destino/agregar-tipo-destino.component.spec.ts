import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTipoDestinoComponent } from './agregar-tipo-destino.component';

describe('AgregarTipoDestinoComponent', () => {
  let component: AgregarTipoDestinoComponent;
  let fixture: ComponentFixture<AgregarTipoDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarTipoDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTipoDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
