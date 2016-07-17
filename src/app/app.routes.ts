import { provideRouter, RouterConfig } from '@angular/router';

import { routesRoutes } from './routes';
import { sandboxRoutes } from './sandbox';

export const appRoutes: RouterConfig = [
  ...routesRoutes,
  ...sandboxRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];
