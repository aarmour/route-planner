import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import {
  AppComponent,
  environment,
  APP_ROUTER_PROVIDERS
} from './app';
import { setAccessToken } from './app/mapbox';

if (environment.production) {
  enableProdMode();
}

setAccessToken(environment.mapbox.accessToken);

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
]);
