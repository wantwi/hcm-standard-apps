import React from 'react';

const Dashboard = React.lazy(() => import('./templates/dashboard/Dashboard'));
const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard  },
  // { path: '/apps', name: 'Apps', component: Dashboard },
];

export default routes;


