import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBottonComponent } from './call-botton.component';

describe('CallBottonComponent', () => {
  let component: CallBottonComponent;
  let fixture: ComponentFixture<CallBottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallBottonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
