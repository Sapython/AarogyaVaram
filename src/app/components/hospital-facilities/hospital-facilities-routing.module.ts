import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalFacilitiesComponent } from './hospital-facilities.component';

const routes: Routes = [{ path: '', component: HospitalFacilitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalFacilitiesRoutingModule { }
