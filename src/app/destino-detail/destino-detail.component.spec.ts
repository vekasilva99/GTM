import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoDetailComponent } from './destino-detail.component';

describe('DestinoDetailComponent', () => {
  let component: DestinoDetailComponent;
  let fixture: ComponentFixture<DestinoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
