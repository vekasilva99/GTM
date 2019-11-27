import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHabitacionComponent } from './crud-habitacion.component';

describe('CrudHabitacionComponent', () => {
  let component: CrudHabitacionComponent;
  let fixture: ComponentFixture<CrudHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
