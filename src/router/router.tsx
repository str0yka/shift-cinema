import { RouteObject } from 'react-router-dom';

import { HomeLazy } from '~/pages';
import { PUBLIC_ROUTE } from '~/utils/constants';

export const publicRoutes: RouteObject[] = [
  {
    path: PUBLIC_ROUTE.HOME,
    element: <HomeLazy />,
  },
];
