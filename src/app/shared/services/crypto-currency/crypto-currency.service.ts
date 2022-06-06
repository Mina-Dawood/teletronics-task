import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG, CryptoCurrency, GlobalResponse } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class CryptoCurrencyService {
  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<CryptoCurrency[]> {
    const toData = (res: GlobalResponse<CryptoCurrency>) => res.data;
    return this.http
      .get<GlobalResponse<CryptoCurrency>>(API_CONFIG.CRYPTO_CURRENCY.GET_ITEMS)
      .pipe(map(toData));
  }
}
