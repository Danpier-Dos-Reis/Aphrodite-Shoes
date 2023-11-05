import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselaccesoriesComponent } from './carrouselaccesories.component';

describe('CarrouselaccesoriesComponent', () => {
  let component: CarrouselaccesoriesComponent;
  let fixture: ComponentFixture<CarrouselaccesoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselaccesoriesComponent]
    });
    fixture = TestBed.createComponent(CarrouselaccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
