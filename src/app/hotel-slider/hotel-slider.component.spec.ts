import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSliderComponent } from './hotel-slider.component';

describe('HotelSliderComponent', () => {
  let component: HotelSliderComponent;
  let fixture: ComponentFixture<HotelSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
