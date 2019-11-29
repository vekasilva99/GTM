import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamientosComponent } from './alojamientos.component';

describe('AlojamientosComponent', () => {
  let component: AlojamientosComponent;
  let fixture: ComponentFixture<AlojamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlojamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlojamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
