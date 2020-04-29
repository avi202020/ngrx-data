import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs$: Observable<Job[]>;
  selected: Job;
  loading$: Observable<boolean>;

  constructor(private jobService: JobService) {
    this.jobs$ = jobService.entities$;
    this.loading$ = jobService.loading$;
   }

  ngOnInit() {
    this.getHeroes();
    // console.log(this.jobs$);
  }

  add(job: Job) {
    this.jobService.add(job);
  }

  close() {
    this.selected = null;
  }

  delete(job: Job) {
    this.jobService.delete(job.id);
    this.close();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getHeroes() {
    this.jobService.getAll();
    this.close();
  }

  select(job: Job) {
    this.selected = job;
  }

  update(job: Job) {
    this.jobService.update(job);
  }

}
