import { TestBed } from '@angular/core/testing';
import { localStorageMock } from '@app/shared/mocks';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set item in local storage when setToken method invoked', () => {
    const setItemSpy = spyOn(localStorage, 'setItem').and.callFake(
      localStorageMock.setItem
    );
    LocalStorageService.setToken('jwt.oken');
    expect(setItemSpy).toHaveBeenCalled();
  });

  it('should get item from local storage when getToken method invoked', () => {
    const getItemSpy = spyOn(localStorage, 'getItem').and.callFake(
      localStorageMock.getItem
    );
    LocalStorageService.getToken();
    expect(getItemSpy).toHaveBeenCalled();
  });

  it('should remove item from local storage when removeToken method invoked', () => {
    const removeItemSpy = spyOn(localStorage, 'removeItem').and.callFake(
      localStorageMock.removeItem
    );
    LocalStorageService.removeToken();
    expect(removeItemSpy).toHaveBeenCalled();
  });

  it('should set item in local storage when setSelectedCurrencies method invoked', () => {
    const setItemSpy = spyOn(localStorage, 'setItem').and.callFake(
      localStorageMock.setItem
    );
    LocalStorageService.setSelectedCurrencies(['id-1', 'id-2']);
    expect(setItemSpy).toHaveBeenCalled();
  });

  it('should get item from local storage when getSelectedCurrencies method invoked', () => {
    const getItemSpy = spyOn(localStorage, 'getItem').and.callFake(
      localStorageMock.getItem
    );
    LocalStorageService.getSelectedCurrencies();
    expect(getItemSpy).toHaveBeenCalled();
  });

  it('should remove item from local storage when removeSelectedCurrencies method invoked', () => {
    const removeItemSpy = spyOn(localStorage, 'removeItem').and.callFake(
      localStorageMock.removeItem
    );
    LocalStorageService.removeSelectedCurrencies();
    expect(removeItemSpy).toHaveBeenCalled();
  });
});
