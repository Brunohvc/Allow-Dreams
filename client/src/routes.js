import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Planos = React.lazy(() => import('./views/Base/Planos'));
const Home = React.lazy(() => import('./views/Base/Home'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Perfil = React.lazy(() => import('./views/Perfil/Perfil'));
const EditPerfil = React.lazy(() => import('./views/EditPerfil/EditPerfil'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/planos', name: 'Planos', component: Planos },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/home', name: 'Home', component: Home },
  { path: '/perfil', exact: true,  name: 'Perfil', component: Perfil },
  { path: '/editPerfil', exact: true,  name: 'EditPerfil', component: EditPerfil },
];

export default routes;
