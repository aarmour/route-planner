import { RouterConfig } from '@angular/router';

import { RoutesComponent } from './routes.component';
import { PlacesComponent } from './places';

export const routesRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: 'routes',
    terminal: true
  },
  {
    path: 'routes',
    component: RoutesComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'places'
      // },
      {
        path: 'places',
        component: PlacesComponent,
        children: [
          {
            path: '**',
            component: PlacesComponent
          }
        ]
      }
    ]
  }
];
