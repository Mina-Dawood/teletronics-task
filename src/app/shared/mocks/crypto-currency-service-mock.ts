import { CryptoCurrency } from '@app/shared/interfaces';
import { Observable, of } from 'rxjs';

export const ITEMS_MOCK: CryptoCurrency[] = [
  {
    id: 'bitcoin',
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    supply: '19061568.0000000000000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '579977351146.6009608608400384',
    volumeUsd24Hr: '16425642989.1897643545582069',
    priceUsd: '30426.5289794942871888',
    changePercent24Hr: '2.7455116945612577',
    vwap24Hr: '30404.0469858769597995',
    explorer: 'https://blockchain.info/',
  },
  {
    id: 'ethereum',
    rank: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    supply: '121093086.3115000000000000',
    maxSupply: null,
    marketCapUsd: '218178286183.8900175940192836',
    volumeUsd24Hr: '11508599325.1305192055016722',
    priceUsd: '1801.7402382713075243',
    changePercent24Hr: '1.9557566567592703',
    vwap24Hr: '1799.7696372848170593',
    explorer: 'https://etherscan.io/',
  },
  {
    id: 'tether',
    rank: '3',
    symbol: 'USDT',
    name: 'Tether',
    supply: '72420549552.6780100000000000',
    maxSupply: null,
    marketCapUsd: '72367248650.7185821643171534',
    volumeUsd24Hr: '29333711066.6268824334380703',
    priceUsd: '0.9992640085957832',
    changePercent24Hr: '-0.0315082050187589',
    vwap24Hr: '0.9992725906319789',
    explorer: 'https://www.omniexplorer.info/asset/31',
  },
  {
    id: 'usd-coin',
    rank: '4',
    symbol: 'USDC',
    name: 'USD Coin',
    supply: '53840605136.5858900000000000',
    maxSupply: null,
    marketCapUsd: '53817346324.3743766331896707',
    volumeUsd24Hr: '1939711358.0943348335299234',
    priceUsd: '0.9995680061144835',
    changePercent24Hr: '-0.0802171238671160',
    vwap24Hr: '1.0001180911509198',
    explorer:
      'https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  },
  {
    id: 'binance-coin',
    rank: '5',
    symbol: 'BNB',
    name: 'BNB',
    supply: '166801148.0000000000000000',
    maxSupply: '166801148.0000000000000000',
    marketCapUsd: '48652814346.3987525184536132',
    volumeUsd24Hr: '595888849.5745897683616545',
    priceUsd: '291.6815317506013359',
    changePercent24Hr: '2.7758543245890521',
    vwap24Hr: '286.4447996752519353',
    explorer:
      'https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
  },
];

export class CryptoCurrencyServiceMock {
  private originalItems: CryptoCurrency[] = ITEMS_MOCK;

  getItems(): Observable<CryptoCurrency[]> {
    return of(this.originalItems);
  }

  getItemById(id: string): Observable<CryptoCurrency> {
    return of(
      this.originalItems.find(
        (currency) => currency.id === id
      ) as CryptoCurrency
    );
  }
}
