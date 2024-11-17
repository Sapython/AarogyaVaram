import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingRejectedComponent } from './booking-rejected.component';

const routes: Routes = [{ path: '', component: BookingRejectedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRejectedRoutingModule { }
