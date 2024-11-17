import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    ComponentsModule,
  ]
})
export class ContactusModule { }
