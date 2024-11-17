import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRejectedComponent } from './booking-rejected.component';

describe('BookingRejectedComponent', () => {
  let component: BookingRejectedComponent;
  let fixture: ComponentFixture<BookingRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingRejectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
