import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRejectedRoutingModule } from './booking-rejected-routing.module';
import { BookingRejectedComponent } from './booking-rejected.component';


@NgModule({
  declarations: [
    BookingRejectedComponent
  ],
  imports: [
    CommonModule,
    BookingRejectedRoutingModule
  ]
})
export class BookingRejectedModule { }
