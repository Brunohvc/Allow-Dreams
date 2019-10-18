export default {
  items: [
    {
      name: 'Home',
      url: '/home',
      icon: 'icon-puzzle',
    },
    {
      title: true,
      name: 'Perfil',
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
      name: 'Botões',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Icones',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-globe',
      badge: {
        variant: 'info',
        text: 'NOVO',
      },
    },
    {
      divider: true,
    },
  ],
};
