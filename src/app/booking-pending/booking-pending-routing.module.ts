import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPendingComponent } from './booking-pending.component';

const routes: Routes = [{ path: '', component: BookingPendingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingPendingRoutingModule { }
