import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpaneledDoctorsComponent } from './empaneled-doctors.component';

const routes: Routes = [{ path: '', component: EmpaneledDoctorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpaneledDoctorsRoutingModule { }
