import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaneledDoctorsComponent } from './empaneled-doctors.component';

describe('EmpaneledDoctorsComponent', () => {
  let component: EmpaneledDoctorsComponent;
  let fixture: ComponentFixture<EmpaneledDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpaneledDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpaneledDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
