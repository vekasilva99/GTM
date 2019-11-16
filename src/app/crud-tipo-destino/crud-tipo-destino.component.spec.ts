import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTipoDestinoComponent } from './crud-tipo-destino.component';

describe('CrudTipoDestinoComponent', () => {
  let component: CrudTipoDestinoComponent;
  let fixture: ComponentFixture<CrudTipoDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTipoDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTipoDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
