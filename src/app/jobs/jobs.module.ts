import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { JobsComponent } from './jobs/jobs.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: JobsComponent }
];

@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [JobsComponent]
})
export class JobsModule { }
