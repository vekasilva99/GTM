import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDestinoComponent } from './agregar-destino.component';

describe('AgregarDestinoComponent', () => {
  let component: AgregarDestinoComponent;
  let fixture: ComponentFixture<AgregarDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
