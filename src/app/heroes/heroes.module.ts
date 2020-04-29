import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { JobsComponent } from '../jobs/jobs/jobs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: JobsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [HeroesComponent, HeroDetailComponent],
  declarations: [HeroesComponent, HeroDetailComponent, HeroListComponent, JobsComponent]
})
export class HeroesModule {}
