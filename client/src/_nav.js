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
      url: '/base/carousels',
      icon: 'icon-puzzle',
    },
    {
      title: true,
      name: 'Plano',
    },
    {
      name: 'Pagamento',
      url: '/base/forms',
      icon: 'icon-puzzle',
    },
    {
      title: true,
      name: 'Outros',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'List groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Navegação',
          url: '/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginação',
          url: '/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tabelas',
          url: '/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      divider: true,
    },
  ],
};
