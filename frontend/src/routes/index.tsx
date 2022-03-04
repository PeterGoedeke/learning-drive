import { RouteObject } from 'react-router-dom';

import AccountPage from '../pages/AccountPage';
import ActivityPage from '../pages/ActivityPage';
import GlobalPage from '../pages/GlobalPage';
import Layout from '../pages/Layout';
import LoginPage from '../pages/LoginPage';

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
    ];
  }
};
