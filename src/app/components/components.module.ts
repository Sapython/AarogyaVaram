import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
// import { ExpertDoctorsComponent } from './expert-doctors/expert-doctors.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HospitalFacilitiesComponent } from './hospital-facilities/hospital-facilities.component';
import { HospitalServicesComponent } from './hospital-services/hospital-services.component';
import { InspiringStoriesComponent } from './inspiring-stories/inspiring-stories.component';
import { SpecialServiceComponent } from './special-service/special-service.component';
import { SliderComponent } from './slider/slider.component';
import { VisitPlanComponent } from './visit-plan/visit-plan.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CallBottonComponent } from './call-botton/call-botton.component';
import { CardsComponent } from './cards/cards.component';
import { ExportDoctorsComponent } from './expert-doctors/expert-doctors.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';


@NgModule({
  declarations: [
    SliderComponent,
    HospitalFacilitiesComponent,
    InspiringStoriesComponent,
    FooterComponent,
    // CallBottonComponent,
    HospitalServicesComponent,
    SpecialServiceComponent,
    VisitPlanComponent,
    ContactUsComponent,
    HeaderComponent,
    CardsComponent,
    ExportDoctorsComponent,
    GalleryComponentComponent,

  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule,

  ],
  exports: [
    SliderComponent,
    HospitalFacilitiesComponent,
    InspiringStoriesComponent,
    FooterComponent,
    // CallBottonComponent,
    HospitalServicesComponent,
    SpecialServiceComponent,
    VisitPlanComponent,
    ContactUsComponent,
    HeaderComponent,
    CardsComponent,
    ExportDoctorsComponent,
    GalleryComponentComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
