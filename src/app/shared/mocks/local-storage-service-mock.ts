export class LocalStorageServiceMock {
  //#region Token methods
  static getToken(): string | null {
    return 'test-token';
  }

  static setToken(token: string): void {
    // Do nothing
  }

  static removeToken(): void {
    // Do nothing
  }
  //#endregion

  //#region SelectedCurrencies methods
  static getSelectedCurrencies(): string[] | undefined {
    return ['bitcoin', ''];
  }

  static setSelectedCurrencies(selectedCurrencies: string[]): void {
    // Do nothing
  }

  static removeSelectedCurrencies(): void {
    // Do nothing
  }
  //#endregion
}
