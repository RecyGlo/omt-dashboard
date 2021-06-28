/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
// import DashboardAnalyticsView from './views/DashboardAnalytics';
// import DashboardDefaultView from './views/DashboardDefault';
// import OverviewView from './views/Overview';
// import PresentationView from './views/Presentation';

let user = localStorage.getItem('user');

let main_path = user ?
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />
  }
  :
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/auth/login" />
  }

const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   component: () => { user ? <Redirect to="/presentation" /> : <Redirect to="/auth/login" /> }
  // }
  main_path,
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('views/Register'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/dashboard',
        exact: true,
        component: lazy(() => import('views/Dashboard'))
      },
      {
        path: '/user',
        exact: true,
        component: lazy(() => import('views/UserList'))
      },
      {
        path: '/junk_shop',
        exact: true,
        component: lazy(() => import('views/JunkShopList'))
      },
      {
        path: '/item',
        exact: true,
        component: lazy(() => import('views/ItemList'))
      },
      {
        path: '/news',
        exact: true,
        component: lazy(() => import('views/NewsList'))
      },
      {
        path: '/announcement',
        exact: true,
        component: lazy(() => import('views/Announcement'))
      },
      {
        path: '/announcement/:tab',
        exact: true,
        component: lazy(() => import('views/Announcement'))
      },
      // {
      //   path: '/user/edit/:id',
      //   exact: true,
      //   component: lazy(() => import('views/InvoiceDetails'))
      // },
      // {
      //   path: '/calendar',
      //   exact: true,
      //   component: lazy(() => import('views/Calendar'))
      // },
      // {
      //   path: '/changelog',
      //   exact: true,
      //   component: lazy(() => import('views/Changelog'))
      // },
      // {
      //   path: '/chat',
      //   exact: true,
      //   component: lazy(() => import('views/Chat'))
      // },
      // {
      //   path: '/chat/:id',
      //   exact: true,
      //   component: lazy(() => import('views/Chat'))
      // },
      // {
      //   path: '/dashboards/analytics',
      //   exact: true,
      //   component: DashboardAnalyticsView
      // },
      // {
      //   path: '/dashboards/default',
      //   exact: true,
      //   component: DashboardDefaultView
      // },
      // {
      //   path: '/invoices/:id',
      //   exact: true,
      //   component: lazy(() => import('views/InvoiceDetails'))
      // },
      // {
      //   path: '/kanban-board',
      //   exact: true,
      //   component: lazy(() => import('views/KanbanBoard'))
      // },
      // {
      //   path: '/mail',
      //   exact: true,
      //   component: lazy(() => import('views/Mail'))
      // },
      // {
      //   path: '/management/customers',
      //   exact: true,
      //   component: lazy(() => import('views/CustomerManagementList'))
      // },
      // {
      //   path: '/management/customers/:id',
      //   exact: true,
      //   component: lazy(() => import('views/CustomerManagementDetails'))
      // },
      // {
      //   path: '/management/customers/:id/:tab',
      //   exact: true,
      //   component: lazy(() => import('views/CustomerManagementDetails'))
      // },
      // {
      //   path: '/management/projects',
      //   exact: true,
      //   component: lazy(() => import('views/ProjectManagementList'))
      // },
      // {
      //   path: '/management/orders',
      //   exact: true,
      //   component: lazy(() => import('views/OrderManagementList'))
      // },
      // {
      //   path: '/management/orders/:id',
      //   exact: true,
      //   component: lazy(() => import('views/OrderManagementDetails'))
      // },
      // {
      //   path: '/overview',
      //   exact: true,
      //   component: OverviewView
      // },
      // {
      //   path: '/presentation',
      //   exact: true,
      //   component: PresentationView
      // },
      // {
      //   path: '/profile/:id',
      //   exact: true,
      //   component: lazy(() => import('views/Profile'))
      // },
      // {
      //   path: '/profile/:id/:tab',
      //   exact: true,
      //   component: lazy(() => import('views/Profile'))
      // },
      // {
      //   path: '/projects/create',
      //   exact: true,
      //   component: lazy(() => import('views/ProjectCreate'))
      // },
      // {
      //   path: '/projects/:id',
      //   exact: true,
      //   component: lazy(() => import('views/ProjectDetails'))
      // },
      // {
      //   path: '/projects/:id/:tab',
      //   exact: true,
      //   component: lazy(() => import('views/ProjectDetails'))
      // },
      // {
      //   path: '/projects',
      //   exact: true,
      //   component: lazy(() => import('views/ProjectList'))
      // },
      // {
      //   path: '/settings',
      //   exact: true,
      //   component: lazy(() => import('views/Settings'))
      // },
      // {
      //   path: '/settings/:tab',
      //   exact: true,
      //   component: lazy(() => import('views/Settings'))
      // },
      // {
      //   path: '/social-feed',
      //   exact: true,
      //   component: lazy(() => import('views/SocialFeed'))
      // },
      // {
      //   path: '/getting-started',
      //   exact: true,
      //   component: lazy(() => import('views/GettingStarted'))
      // },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
