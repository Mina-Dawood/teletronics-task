import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CryptoCurrencyService,
  LocalStorageService,
} from '@app/shared/services';
import { PAGES_CONFIG, PRICE_WEBSOCKET_URL } from '@app/shared/constants';

import { finalize, Subject, Subscription, takeUntil } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { CryptoCurrency } from '@app/shared/interfaces';
import { WebSocketMsg } from '@app/shared/types';
import { Router } from '@angular/router';

@Component({
  selector: 'teletronics-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject<void>();
  private pricesWs!: WebSocketSubject<WebSocketMsg>;
  private subscriber$: Subscription = new Subscription();
  private selectedCurrencies!: string[];
  currencies!: CryptoCurrency[];
  isLoading!: boolean;

  constructor(
    private readonly cryptoCurrencyService: CryptoCurrencyService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.setSelectedCurrencies();
    this.loadAllCryptoCurrencies();
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
   * Method to navigate to add page, so we can add/remove currencies
   */
  openAdd(): void {
    this.router.navigate([PAGES_CONFIG.cryptoCurrency.children.add.route]);
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
      .subscribe((currencies) => {
        this.setCurrenciesToDisplay(currencies);
        this.listenOnSelectedCurrenciesPrices();
      });
  }

  /**
   * Method to listen on any change in prices to update dashboard live prices
   */
  private listenOnSelectedCurrenciesPrices(): void {
    if (this.selectedCurrencies?.length) {
      const webSocketUrl = `${PRICE_WEBSOCKET_URL}${this.selectedCurrencies?.join(
        ','
      )}`;
      this.pricesWs = webSocket<WebSocketMsg>(webSocketUrl);

      this.unsubscribe();

      this.subscriber$ = this.pricesWs.subscribe({
        next: (msg: WebSocketMsg) => this.updateCurrenciesPrices(msg),
        error: () => this.listenOnSelectedCurrenciesPrices(),
      });
    }
  }

  /**
   * Method to set selected currencies
   */
  private setSelectedCurrencies(): void {
    this.selectedCurrencies =
      LocalStorageService.getSelectedCurrencies() as string[];
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
  private updateCurrenciesPrices(newPrices: WebSocketMsg): void {
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
    this.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
