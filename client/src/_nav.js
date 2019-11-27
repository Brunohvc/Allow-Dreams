export default {
  items: [
    {
      name: 'Home',
      url: '/home',
      icon: 'icon-home',
    },
    {
      name: 'Páginas',
      url: '/pages',
      icon: 'icon-layers',
      children: [
        {
          name: 'Entrar',
          url: '/login',
          icon: 'icon-check',
        },
        {
          name: 'Registrar-se',
          url: '/register',
          icon: 'icon-user',
        },
      ],
    },
    {
      title: true,
      name: 'Fotos',
    },
    {
      name: 'Álbuns',
      url: '/album',
      icon: 'icon-puzzle',
    },
    {
      title: true,
      name: 'Plano',
    },
    {
      name: 'Planos',
      url: '/planos',
      icon: 'icon-puzzle',
    },
    {
      title: true,
      name: 'Perfil',
    },
    {
      name: 'Meu Perfil',
      url: '/perfil',
      icon: 'icon-user',
    },
    {
      divider: true,
    },
  ],
};
