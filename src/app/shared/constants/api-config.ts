import { environment } from '@env/environment';

const baseURL: string = environment.apiUrl;

export const API_CONFIG = {
  CRYPTO_CURRENCY: {
    GET_ITEMS: `${baseURL}assets`,
  },
};
