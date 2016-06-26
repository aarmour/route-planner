import { provideRouter, RouterConfig } from '@angular/router';

import { routesRoutes } from './routes/routes.routes';

export const appRoutes: RouterConfig = [
  ...routesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];
