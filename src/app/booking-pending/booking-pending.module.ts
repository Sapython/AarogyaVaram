import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingPendingRoutingModule } from './booking-pending-routing.module';
import { BookingPendingComponent } from './booking-pending.component';


@NgModule({
  declarations: [
    BookingPendingComponent
  ],
  imports: [
    CommonModule,
    BookingPendingRoutingModule
  ]
})
export class BookingPendingModule { }
