export const PAGES_CONFIG = {
  home: {
    name: 'home',
    route: '/home',
  },
  cryptoCurrency: {
    name: 'crypto-currency',
    route: '/crypto-currency',
    children: {
      dashboard: {
        name: 'dashboard',
        route: '/dashboard',
      },
      details: {
        name: 'details',
        route: '/details',
      },
      add: {
        name: 'add',
        route: '/add',
      },
    },
  },
};
