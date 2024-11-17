import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ServicesRoutingModule } from './services-routing.module';
// import { ServicesComponent } from './services.component';
import { ComponentsModule } from '../components/components.module';
// import { HeaderComponent } from '../components/header/header.component';




@NgModule({
  declarations: [
    // ServicesComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    // ServicesRoutingModule,
    ComponentsModule,
    CommonModule,

  ]
})
export class ServicesModule { }
