import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GallaryRoutingModule } from './gallary-routing.module';
import { GallaryComponent } from './gallary.component';
import { ComponentsModule } from '../components/components.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    GallaryComponent
  ],
  imports: [
    CommonModule,
    GallaryRoutingModule,
    ComponentsModule,
    SwiperModule
  ]
})
export class GallaryModule { }
