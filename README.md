# ngrx-data
ngrx-data example

# adding ngrx and ngrx-data to this application.
```bash
npm install
npm i @ngrx/effects @ngrx/entity @ngrx/store @ngrx/store-devtools ngrx-data --save
```

# Create the NgRx App Store
```bash
ng g m store/app-store --flat -m app --spec false
```

# Set up the created Store (app-store.module.ts)
```typescript
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule {}
```

# Define the entities for our store (entity-metadata.ts)
named entity-metadata.ts in the store folder.
```typescript
import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
  Hero: {},
  Villain: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { Hero: 'Heroes' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
```

# Import the entity store into the app store (app-store.module.ts)
```typescript
import { DefaultDataServiceConfig, NgrxDataModule } from 'ngrx-data';
import { entityConfig } from './entity-metadata';
```
imports array
```typescript
NgrxDataModule.forRoot(entityConfig),
```
app.module.ts
```typescript
AppStoreModule
```


# Simplify the Job data services (job.service.ts)
```typescript
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { Job } from '../core';

@Injectable({ providedIn: 'root' })
export class JobService extends EntityCollectionServiceBase<Job> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Job', serviceElementsFactory);
  }
}
```


# Inject the service to component (job.component.ts)
```typescript
constructor(private heroService: HeroService) {
  this.heroes$ = heroService.entities$;
  this.loading$ = heroService.loading$;
}
```

# Can use the followings
```typescript
add(hero: Hero) {
  this.heroService.add(hero);
}

delete(hero: Hero) {
  this.heroService.delete(hero);
  this.close();
}

getHeroes() {
  this.heroService.getAll();
  this.close();
}

update(hero: Hero) {
  this.heroService.update(hero);
}
```
































