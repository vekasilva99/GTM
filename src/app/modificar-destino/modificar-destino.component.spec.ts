import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDestinoComponent } from './modificar-destino.component';

describe('ModificarDestinoComponent', () => {
  let component: ModificarDestinoComponent;
  let fixture: ComponentFixture<ModificarDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
