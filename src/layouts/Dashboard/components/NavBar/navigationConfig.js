/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
// import React from 'react';
// import { colors } from '@material-ui/core';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
// import ChatIcon from '@material-ui/icons/ChatOutlined';
// import CodeIcon from '@material-ui/icons/Code';
// import DashboardIcon from '@material-ui/icons/DashboardOutlined';
// import ErrorIcon from '@material-ui/icons/ErrorOutline';
// import FolderIcon from '@material-ui/icons/FolderOutlined';
// import ListAltIcon from '@material-ui/icons/ListAlt';
// import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
// import MailIcon from '@material-ui/icons/MailOutlined';
// import PresentToAllIcon from '@material-ui/icons/PresentToAll';
// import PersonIcon from '@material-ui/icons/PersonOutlined';
// import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
// import SettingsIcon from '@material-ui/icons/SettingsOutlined';
// import ViewModuleIcon from '@material-ui/icons/ViewModule';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import ItemIcon from '@material-ui/icons/Cached';
import NewsIcon from '@material-ui/icons/Announcement';
import RoomIcon from '@material-ui/icons/Room';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


import { Label } from 'components';

export default [
  {
    title: 'Pages',
    pages: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: HomeIcon
      },
      {
        title: 'User',
        href: '/user',
        icon: PeopleIcon,
        // children: [
        //   {
        //     title: 'Users',
        //     href: '/user/users'
        //   },
        //   // {
        //   //   title: 'Customer Details',
        //   //   href: '/management/customers/1/summary'
        //   // },
        //   // {
        //   //   title: 'Projects',
        //   //   href: '/management/projects'
        //   // },
        //   // {
        //   //   title: 'Orders',
        //   //   href: '/management/orders'
        //   // },
        //   // {
        //   //   title: 'Order Details',
        //   //   href: '/management/orders/1'
        //   // }
        // ]
      },
      {
        title: 'Item',
        href: '/item',
        icon: ItemIcon,
        // children: [
        //   {
        //     title: 'Users',
        //     href: '/user/users'
        //   },
        //   // {
        //   //   title: 'Customer Details',
        //   //   href: '/management/customers/1/summary'
        //   // },
        //   // {
        //   //   title: 'Projects',
        //   //   href: '/management/projects'
        //   // },
        //   // {
        //   //   title: 'Orders',
        //   //   href: '/management/orders'
        //   // },
        //   // {
        //   //   title: 'Order Details',
        //   //   href: '/management/orders/1'
        //   // }
        // ]
      },
      {
        title: 'Junk Shop',
        href: '/junk_shop',
        icon: RoomIcon,
        // children: [
        //   {
        //     title: 'Users',
        //     href: '/user/users'
        //   },
        //   // {
        //   //   title: 'Customer Details',
        //   //   href: '/management/customers/1/summary'
        //   // },
        //   // {
        //   //   title: 'Projects',
        //   //   href: '/management/projects'
        //   // },
        //   // {
        //   //   title: 'Orders',
        //   //   href: '/management/orders'
        //   // },
        //   // {
        //   //   title: 'Order Details',
        //   //   href: '/management/orders/1'
        //   // }
        // ]
      },
      {
        title: 'News',
        href: '/news',
        icon: NewsIcon,
        // children: [
        //   {
        //     title: 'Users',
        //     href: '/user/users'
        //   },
        //   // {
        //   //   title: 'Customer Details',
        //   //   href: '/management/customers/1/summary'
        //   // },
        //   // {
        //   //   title: 'Projects',
        //   //   href: '/management/projects'
        //   // },
        //   // {
        //   //   title: 'Orders',
        //   //   href: '/management/orders'
        //   // },
        //   // {
        //   //   title: 'Order Details',
        //   //   href: '/management/orders/1'
        //   // }
        // ]
      },
      {
        title: 'Announcement',
        href: '/announcement',
        icon: NotificationsActiveIcon,
        children: [
          {
            title: 'Notification',
            href: '/announcement/notification'
          },
          {
            title: 'History',
            href: '/announcement/history'
          },
          // {
          //   title: 'Notifications',
          //   href: '/settings/notifications'
          // },
          // {
          //   title: 'Security',
          //   href: '/settings/security'
          // }
        ]
      },
  //     {
  //       title: 'Overview',
  //       href: '/overview',
  //       icon: HomeIcon
  //     },
  //     {
  //       title: 'Dashboards',
  //       href: '/dashboards',
  //       icon: DashboardIcon,
  //       children: [
  //         {
  //           title: 'Default',
  //           href: '/dashboards/default'
  //         },
  //         {
  //           title: 'Analytics',
  //           href: '/dashboards/analytics'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Management',
  //       href: '/management',
  //       icon: BarChartIcon,
  //       children: [
  //         {
  //           title: 'Customers',
  //           href: '/management/customers'
  //         },
  //         {
  //           title: 'Customer Details',
  //           href: '/management/customers/1/summary'
  //         },
  //         {
  //           title: 'Projects',
  //           href: '/management/projects'
  //         },
  //         {
  //           title: 'Orders',
  //           href: '/management/orders'
  //         },
  //         {
  //           title: 'Order Details',
  //           href: '/management/orders/1'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Social Feed',
  //       href: '/social-feed',
  //       icon: PeopleIcon
  //     },
  //     {
  //       title: 'Profile',
  //       href: '/profile',
  //       icon: PersonIcon,
  //       children: [
  //         {
  //           title: 'Timeline',
  //           href: '/profile/1/timeline'
  //         },
  //         {
  //           title: 'Connections',
  //           href: '/profile/1/connections'
  //         },
  //         {
  //           title: 'Projects',
  //           href: '/profile/1/projects'
  //         },
  //         {
  //           title: 'Reviews',
  //           href: '/profile/1/reviews'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Project',
  //       href: '/projects',
  //       icon: FolderIcon,
  //       children: [
  //         {
  //           title: 'Browse',
  //           href: '/projects'
  //         },
  //         {
  //           title: 'Create',
  //           href: '/projects/create'
  //         },
  //         {
  //           title: 'Overview',
  //           href: '/projects/1/overview'
  //         },
  //         {
  //           title: 'Files',
  //           href: '/projects/1/files'
  //         },
  //         {
  //           title: 'Activity',
  //           href: '/projects/1/activity'
  //         },
  //         {
  //           title: 'Subscribers',
  //           href: '/projects/1/subscribers'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Invoice',
  //       href: '/invoices/1',
  //       icon: ReceiptIcon
  //     },
  //     {
  //       title: 'Kanban Board',
  //       href: '/kanban-board',
  //       icon: ListAltIcon
  //     },
  //     {
  //       title: 'Mail',
  //       href: '/mail',
  //       icon: MailIcon,
  //       label: () => (
  //         <Label
  //           color={colors.red[500]}
  //           shape="rounded"
  //         >
  //           2
  //         </Label>
  //       )
  //     },
  //     {
  //       title: 'Chat',
  //       href: '/chat',
  //       icon: ChatIcon,
  //       label: () => (
  //         <Label
  //           color={colors.red[500]}
  //           shape="rounded"
  //         >
  //           4
  //         </Label>
  //       )
  //     },
  //     {
  //       title: 'Calendar',
  //       href: '/calendar',
  //       icon: CalendarTodayIcon,
  //       label: () => <Label color={colors.green[500]}>New</Label>
  //     },
  //     {
  //       title: 'Settings',
  //       href: '/settings',
  //       icon: SettingsIcon,
  //       children: [
  //         {
  //           title: 'General',
  //           href: '/settings/general'
  //         },
  //         {
  //           title: 'Subscription',
  //           href: '/settings/subscription'
  //         },
  //         {
  //           title: 'Notifications',
  //           href: '/settings/notifications'
  //         },
  //         {
  //           title: 'Security',
  //           href: '/settings/security'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Authentication',
  //       href: '/auth',
  //       icon: LockOpenIcon,
  //       children: [
  //         {
  //           title: 'Login',
  //           href: '/auth/login'
  //         },
  //         {
  //           title: 'Register',
  //           href: '/auth/register'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Errors',
  //       href: '/errors',
  //       icon: ErrorIcon,
  //       children: [
  //         {
  //           title: 'Error 401',
  //           href: '/errors/error-401'
  //         },
  //         {
  //           title: 'Error 404',
  //           href: '/errors/error-404'
  //         },
  //         {
  //           title: 'Error 500',
  //           href: '/errors/error-500'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: 'Support',
  //   pages: [
  //     {
  //       title: 'Presentation',
  //       href: '/presentation',
  //       icon: PresentToAllIcon
  //     },
  //     {
  //       title: 'Getting started',
  //       href: '/getting-started',
  //       icon: CodeIcon
  //     },
  //     {
  //       title: 'Changelog',
  //       href: '/changelog',
  //       icon: ViewModuleIcon,
  //       label: () => <Label color={colors.blue['500']}>v1.2.0</Label>
  //     }
    ]
  }
];
