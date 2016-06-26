import { RouterConfig } from '@angular/router';

import { RoutesComponent } from './routes.component';

export const routesRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/routes',
    terminal: true
  },
  {
    path: 'routes',
    component: RoutesComponent
  }
];
