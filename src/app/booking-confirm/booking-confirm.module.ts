import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingConfirmRoutingModule } from './booking-confirm-routing.module';
import { BookingConfirmComponent } from './booking-confirm.component';


@NgModule({
  declarations: [
    BookingConfirmComponent
  ],
  imports: [
    CommonModule,
    BookingConfirmRoutingModule
  ]
})
export class BookingConfirmModule { }
