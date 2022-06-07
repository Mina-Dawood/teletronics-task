import { PAGES_CONFIG } from '@app/shared/constants';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CryptoCurrency } from '@app/shared/interfaces';
import {
  CryptoCurrencyService,
  LocalStorageService,
} from '@app/shared/services';
import { finalize, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'teletronics-add-crypto-currency',
  templateUrl: './add-crypto-currency.component.html',
  styleUrls: ['./add-crypto-currency.component.scss'],
})
export class AddCryptoCurrencyComponent implements OnInit {
  private readonly destroy$: Subject<void> = new Subject<void>();
  selectedCurrencies!: string[];
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
   * Method to add new currency to local storage
   * @param currencyId to be added
   */
  selectCurrency(currencyId: string): void {
    this.selectedCurrencies.push(currencyId);
    LocalStorageService.setSelectedCurrencies(this.selectedCurrencies);
  }

  /**
   * Method to remove currency from local storage
   * @param currencyId to be removed
   */
  deselectCurrency(currencyId: string): void {
    this.selectedCurrencies = this.selectedCurrencies?.filter(
      (selectedCurrency) => selectedCurrency !== currencyId
    );
    LocalStorageService.setSelectedCurrencies(this.selectedCurrencies);
  }

  /**
   * Method to go back to the live dashboard
   */
  back(): void {
    this.router.navigate([
      PAGES_CONFIG.cryptoCurrency.children.dashboard.route,
    ]);
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
      .subscribe((currencies) => (this.currencies = currencies));
  }

  /**
   * Method to set selected currencies
   */
  private setSelectedCurrencies(): void {
    this.selectedCurrencies =
      LocalStorageService.getSelectedCurrencies() as string[];
  }
}
