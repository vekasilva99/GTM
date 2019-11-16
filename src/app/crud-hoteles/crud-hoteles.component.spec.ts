import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHotelesComponent } from './crud-hoteles.component';

describe('CrudHotelesComponent', () => {
  let component: CrudHotelesComponent;
  let fixture: ComponentFixture<CrudHotelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudHotelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
