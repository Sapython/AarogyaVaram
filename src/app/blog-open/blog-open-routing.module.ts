import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogOpenComponent } from './blog-open.component';

const routes: Routes = [{ path: '', component: BlogOpenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogOpenRoutingModule { }
