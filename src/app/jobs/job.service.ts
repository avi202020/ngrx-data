import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Job } from '../core';


@Injectable({
  providedIn: 'root'
})
export class JobService extends EntityCollectionServiceBase<Job> {

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Job', factory);
   }
}
