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
        route: '/crypto-currency/dashboard',
      },
      details: {
        name: 'details',
        route: '/crypto-currency/details',
      },
      add: {
        name: 'add',
        route: '/crypto-currency/add',
      },
    },
  },
};
