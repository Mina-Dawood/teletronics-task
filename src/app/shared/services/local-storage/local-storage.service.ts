import { Injectable } from '@angular/core';
import { LocalStorageKeys } from '@app/shared/enums';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  //#region Token methods
  static getToken(): string | null {
    return localStorage.getItem(LocalStorageKeys.token);
  }

  static setToken(token: string): void {
    localStorage.setItem(LocalStorageKeys.token, JSON.stringify(token));
  }

  static removeToken(): void {
    localStorage.removeItem(LocalStorageKeys.token);
  }
  //#endregion

  //#region SelectedCurrencies methods
  static getSelectedCurrencies(): string[] | undefined {
    return localStorage
      .getItem(LocalStorageKeys.selectedCurrencies)
      ?.split(',');
  }

  static setSelectedCurrencies(selectedCurrencies: string[]): void {
    localStorage.setItem(
      LocalStorageKeys.selectedCurrencies,
      selectedCurrencies.join(',')
    );
  }

  static removeSelectedCurrencies(): void {
    localStorage.removeItem(LocalStorageKeys.selectedCurrencies);
  }
  //#endregion
}
