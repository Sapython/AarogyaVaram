import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './aboutus.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    AboutusComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    ComponentsModule
  ]
})
export class AboutusModule {
  windowWidth: number = window.innerWidth;
}
