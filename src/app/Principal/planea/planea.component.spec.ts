import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneaComponent } from './planea.component';

describe('PlaneaComponent', () => {
  let component: PlaneaComponent;
  let fixture: ComponentFixture<PlaneaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
