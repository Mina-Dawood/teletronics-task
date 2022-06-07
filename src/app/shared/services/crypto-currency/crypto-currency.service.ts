import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptoCurrency, GlobalResponse } from '@app/shared/interfaces';
import { API_CONFIG } from '@app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class CryptoCurrencyService {
  private originalItems!: CryptoCurrency[];

  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<CryptoCurrency[]> {
    if (this.originalItems) {
      return of(this.originalItems);
    }

    const toData = (res: GlobalResponse<CryptoCurrency>) => {
      this.originalItems = res.data;
      return this.originalItems;
    };
    return this.http
      .get<GlobalResponse<CryptoCurrency>>(API_CONFIG.CRYPTO_CURRENCY.GET_ITEMS)
      .pipe(map(toData));
  }
}
