import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CryptoCurrencyService,
  LocalStorageService,
} from '@app/shared/services';
import { PRICE_WEBSOCKET_URL } from '@app/shared/constants';

import { finalize, Subject, Subscription, takeUntil } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { CryptoCurrency } from '@app/shared/interfaces';
import { WebSockerMsg } from '@app/shared/types';

@Component({
  selector: 'teletronics-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject<void>();
  private subscriber$: Subscription = new Subscription();
  private selectedCurrencies!: string[];
  currencies!: CryptoCurrency[];
  isLoading!: boolean;

  constructor(private readonly cryptoCurrencyService: CryptoCurrencyService) {}

  ngOnInit(): void {
    this.loadAllCryptoCurrencies();
    this.listenOnSelectedCurrenciesPrices();
  }

  /**
   * Method for logical removing card from dashboard
   * @param currencyId to be removed
   */
  removeCurrency(currencyId: string): void {
    this.selectedCurrencies = this.selectedCurrencies?.filter(
      (selectedCurrency) => selectedCurrency !== currencyId
    );
    LocalStorageService.setSelectedCurrencies(this.selectedCurrencies);
    this.currencies = this.currencies.filter(
      (currency) => currency.id !== currencyId
    );
    this.listenOnSelectedCurrenciesPrices();
  }

  /**
   * Method to load all currencies
   */
  private loadAllCryptoCurrencies(): void {
    this.isLoading = true;
    this.cryptoCurrencyService
      .getItems()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((currencies) => this.setCurrenciesToDisplay(currencies));
  }

  /**
   * Method to listen on any change in prices to update dashboard live prices
   */
  private listenOnSelectedCurrenciesPrices(): void {
    this.selectedCurrencies =
      LocalStorageService.getSelectedCurrencies() as string[];
    const webSocketUrl = `${PRICE_WEBSOCKET_URL}${this.selectedCurrencies?.join(
      ','
    )}`;
    const pricesWs = webSocket<WebSockerMsg>(webSocketUrl);

    this.unsubscribe();

    this.subscriber$ = pricesWs.subscribe({
      next: (msg: WebSockerMsg) => this.updateCurrenciesPrices(msg),
    });
  }

  private unsubscribe(): void {
    if (this.subscriber$) {
      this.subscriber$.unsubscribe();
    }
  }

  /**
   * Method to update live dashboard
   * @param newPrices that come from server
   */
  private updateCurrenciesPrices(newPrices: WebSockerMsg): void {
    const ids: string[] = Object.keys(newPrices);
    ids.forEach((id) => {
      const currencyObject = this.currencies.find(
        (currency) => currency.id === id
      );
      if (currencyObject) {
        currencyObject.priceUsd = newPrices[id];
        currencyObject.changed = true;
        setTimeout(() => (currencyObject.changed = false), 300);
      }
    });
  }

  /**
   * Method to set only selected currencies to be displayed on live dashboard
   * @param currencies all currencies loaded from server
   */
  private setCurrenciesToDisplay(currencies: CryptoCurrency[]): void {
    this.currencies = currencies.filter((currency) =>
      this.selectedCurrencies?.includes(currency.id)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
