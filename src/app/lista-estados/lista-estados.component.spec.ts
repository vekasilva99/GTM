import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstadosComponent } from './lista-estados.component';

describe('ListaEstadosComponent', () => {
  let component: ListaEstadosComponent;
  let fixture: ComponentFixture<ListaEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
