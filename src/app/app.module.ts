import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { AppStoreModule } from './store/app-store.module';
import { JobsComponent } from './jobs/jobs/jobs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'jobs' },
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },
  {
    path: 'villains',
    loadChildren: 'app/villains/villains.module#VillainsModule'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppStoreModule
  ],
  declarations: [AppComponent, JobsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
