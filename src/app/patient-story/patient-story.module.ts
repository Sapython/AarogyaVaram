import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientStoryRoutingModule } from './patient-story-routing.module';
import { PatientStoryComponent } from './patient-story.component';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from "../components/components.module";

@NgModule({
  declarations: [
    PatientStoryComponent,
  ],
  imports: [
    CommonModule,
    PatientStoryRoutingModule,
    SwiperModule,
    ComponentsModule
  ]
})
export class PatientStoryModule { }
