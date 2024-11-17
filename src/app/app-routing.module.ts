import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PatientStoryComponent } from './patient-story/patient-story.component';
import { SpecialServiceComponent } from './components/special-service/special-service.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'contactus', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'blogOpen', loadChildren: () => import('./blog-open/blog-open.module').then(m => m.BlogOpenModule) },
  { path: 'patientstory', loadChildren: () => import('./patient-story/patient-story.module').then(m => m.PatientStoryModule) },
  { path: 'empaneleDoctors', loadChildren: () => import('./empaneled-doctors/empaneled-doctors.module').then(m => m.EmpaneledDoctorsModule) },
  { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'gallery', loadChildren: () => import('./gallary/gallary.module').then(m => m.GallaryModule) },
  { path: 'service', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
  { path: 'bookingPending', loadChildren: () => import('./booking-pending/booking-pending.module').then(m => m.BookingPendingModule) },
  { path: 'bookingConfirm', loadChildren: () => import('./booking-confirm/booking-confirm.module').then(m => m.BookingConfirmModule) },
  { path: 'bookingRejected', loadChildren: () => import('./booking-rejected/booking-rejected.module').then(m => m.BookingRejectedModule) },
  { path: 'healthCheck', loadChildren: () => import('./health-check/health-check.module').then(m => m.HealthCheckModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
