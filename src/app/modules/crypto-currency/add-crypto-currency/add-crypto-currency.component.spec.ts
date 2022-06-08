import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PAGES_CONFIG } from '@app/shared/constants';
import {
  CryptoCurrencyServiceMock,
  LocalStorageServiceMock,
  RouterMock,
} from '@app/shared/mocks';
import {
  CryptoCurrencyService,
  LocalStorageService,
} from '@app/shared/services';
import { TranslateModule } from '@ngx-translate/core';

import { AddCryptoCurrencyComponent } from './add-crypto-currency.component';

describe('AddCryptoCurrencyComponent', () => {
  let component: AddCryptoCurrencyComponent;
  let fixture: ComponentFixture<AddCryptoCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCryptoCurrencyComponent],
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: CryptoCurrencyService, useClass: CryptoCurrencyServiceMock },
        { provide: Router, useClass: RouterMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCryptoCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should getSelectedCurrencies when setSelectedCurrencies mothod invoked', () => {
    const getDefaultCurrenciesSpy = spyOn(
      LocalStorageService,
      'getSelectedCurrencies'
    ).and.callFake(LocalStorageServiceMock.getSelectedCurrencies);
    component['setSelectedCurrencies']();
    expect(getDefaultCurrenciesSpy).toHaveBeenCalled();
  });

  it('should setDefaultCurrenciesSpy when selectCurrency method invoked', () => {
    spyOn(LocalStorageService, 'getSelectedCurrencies').and.returnValue([]);
    const setDefaultCurrenciesSpy = spyOn(
      LocalStorageService,
      'setSelectedCurrencies'
    ).and.callFake(LocalStorageServiceMock.getSelectedCurrencies);
    component.selectCurrency('bitcoin');
    expect(setDefaultCurrenciesSpy).toHaveBeenCalled();
  });

  it('should setDefaultCurrenciesSpy when deselectCurrency method invoked', () => {
    spyOn(LocalStorageService, 'getSelectedCurrencies').and.returnValue([]);
    const setDefaultCurrenciesSpy = spyOn(
      LocalStorageService,
      'setSelectedCurrencies'
    ).and.callFake(LocalStorageServiceMock.getSelectedCurrencies);
    component.deselectCurrency('bitcoin');
    expect(setDefaultCurrenciesSpy).toHaveBeenCalled();
  });

  it('should call back when ngOnInit mothod invoked and no id param', inject(
    [Router],
    (router: Router) => {
      const navigateSpy = spyOn(router, 'navigate');
      component.back();
      expect(navigateSpy).toHaveBeenCalledWith([
        PAGES_CONFIG.cryptoCurrency.children.dashboard.route,
      ]);
    }
  ));
});
