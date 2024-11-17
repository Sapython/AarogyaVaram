import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientStoryComponent } from './patient-story.component';

const routes: Routes = [{ path: '', component: PatientStoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientStoryRoutingModule { }
