import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import { environment } from './environments/environment.prod'; //set into production mode

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) //bootstrapping [means to get things prepared] the AppModule
  .catch(err => console.error(err));
