import { Injectable } from '@angular/core';
import { LocalStorageKeys } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  static getToken(): string | null {
    return localStorage.getItem(LocalStorageKeys.token);
  }

  static setToken(token: string): void {
    localStorage.setItem(LocalStorageKeys.token, JSON.stringify(token));
  }

  static removeToken(): void {
    localStorage.removeItem(LocalStorageKeys.token);
  }
}
