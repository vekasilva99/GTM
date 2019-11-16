import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDestinosComponent } from './crud-destinos.component';

describe('CrudDestinosComponent', () => {
  let component: CrudDestinosComponent;
  let fixture: ComponentFixture<CrudDestinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDestinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
