import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpaneledDoctorsRoutingModule } from './empaneled-doctors-routing.module';
import { EmpaneledDoctorsComponent } from './empaneled-doctors.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    EmpaneledDoctorsComponent
  ],
  imports: [
    CommonModule,
    EmpaneledDoctorsRoutingModule,
    ComponentsModule,
  ]
})
export class EmpaneledDoctorsModule { }
