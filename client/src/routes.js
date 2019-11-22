import React from 'react';

const Album = React.lazy(() => import('./views/Base/Album/Album'));
const Forms = React.lazy(() => import('./views/Base/Pagamento/Pagamento'));
const Planos = React.lazy(() => import('./views/Base/Planos'));
const Home = React.lazy(() => import('./views/Base/Home'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Perfil = React.lazy(() => import('./views/Perfil/Perfil'));
const EditPerfil = React.lazy(() => import('./views/EditPerfil/EditPerfil'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/pagamento', name: 'Forms', component: Forms },
  { path: '/base/planos', name: 'Planos', component: Planos },
  { path: '/album', name: 'Album', component: Album },
  { path: '/home', name: 'Home', component: Home },
  { path: '/perfil', exact: true,  name: 'Perfil', component: Perfil },
  { path: '/editPerfil', exact: true,  name: 'EditPerfil', component: EditPerfil },
];

export default routes;
