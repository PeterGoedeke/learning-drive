import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import Layout from '../pages/Layout';
import LoginPage from '../pages/LoginPage';

const AccountPage = lazy(() => import('../pages/AccountPage'));
const ActivityPage = lazy(() => import('../pages/ActivityPage'));
const GlobalPage = lazy(() => import('../pages/GlobalPage'));

export const buildRoutes = (isAuthenticated: boolean): RouteObject[] => {
  if (isAuthenticated) {
    return [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <GlobalPage /> },
          { path: 'activity', element: <ActivityPage /> },
          { path: 'account', element: <AccountPage /> },
        ],
      },
    ];
  } else {
    return [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <Navigate to='/' />,
      },
    ];
  }
};
