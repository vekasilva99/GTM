import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCiudadesComponent } from './crud-ciudades.component';

describe('CrudCiudadesComponent', () => {
  let component: CrudCiudadesComponent;
  let fixture: ComponentFixture<CrudCiudadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCiudadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
