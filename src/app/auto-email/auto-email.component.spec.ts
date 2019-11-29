import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoEmailComponent } from './auto-email.component';

describe('AutoEmailComponent', () => {
  let component: AutoEmailComponent;
  let fixture: ComponentFixture<AutoEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
