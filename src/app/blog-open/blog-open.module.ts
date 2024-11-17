import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogOpenRoutingModule } from './blog-open-routing.module';
import { BlogOpenComponent } from './blog-open.component';
import { ComponentsModule } from '../components/components.module';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    BlogOpenComponent,
  ],
  imports: [
    CommonModule,
    BlogOpenRoutingModule,
    ComponentsModule,
    SwiperModule
  ]
})
export class BlogOpenModule { }
