export default {
  items: [
    {
      name: 'Home',
      url: '/home',
      icon: 'icon-puzzle',
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
      name: 'Pagamento',
      url: '/pagamento',
      icon: 'icon-puzzle',
    },
    {
      divider: true,
    },
  ],
};
