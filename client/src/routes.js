import React from 'react';

const Album = React.lazy(() => import('./views/Base/Album/Album'));
const Forms = React.lazy(() => import('./views/Base/Pagamento/Pagamento'));
const Planos = React.lazy(() => import('./views/Base/Planos'));
const Home = React.lazy(() => import('./views/Base/Home'));
const Perfil = React.lazy(() => import('./views/Perfil/Perfil'));
const EditPerfil = React.lazy(() => import('./views/EditPerfil/EditPerfil'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/pagamento', name: 'Forms', component: Forms },
  { path: '/planos', name: 'Planos', component: Planos },
  { path: '/album', name: 'Album', component: Album },
  { path: '/home', name: 'Home', component: Home },
  { path: '/perfil', exact: true, name: 'Perfil', component: Perfil },
  { path: '/perfil/:id', exact: true, name: 'Perfil', component: Perfil },
  { path: '/editPerfil', exact: true, name: 'EditPerfil', component: EditPerfil },
];

export default routes;
