import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { publicRoutes } from '~/router';

const router = createBrowserRouter(publicRoutes);

export const App = () => <RouterProvider router={router} />;
