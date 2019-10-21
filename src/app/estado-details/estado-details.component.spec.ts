import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoDetailsComponent } from './estado-details.component';

describe('EstadoDetailsComponent', () => {
  let component: EstadoDetailsComponent;
  let fixture: ComponentFixture<EstadoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
