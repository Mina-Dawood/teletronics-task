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

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: CryptoCurrencyService, useClass: CryptoCurrencyServiceMock },
        { provide: Router, useClass: RouterMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component['selectedCurrencies'] = ['bitcoin', 'ethereum'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setSelectedCurrencies when removeCurrency mothod invoked', () => {
    const getDefaultCurrenciesSpy = spyOn(
      LocalStorageService,
      'setSelectedCurrencies'
    ).and.callFake(LocalStorageServiceMock.setSelectedCurrencies);
    component.removeCurrency('bitcoin');
    expect(getDefaultCurrenciesSpy).toHaveBeenCalled();
  });

  it('should call listenOnSelectedCurrenciesPrices when removeCurrency mothod invoked', () => {
    const listenOnSelectedCurrenciesPricesSpy = spyOn<any>(
      component,
      'listenOnSelectedCurrenciesPrices'
    );
    component.removeCurrency('bitcoin');
    expect(listenOnSelectedCurrenciesPricesSpy).toHaveBeenCalled();
  });

  it('should setCurrenciesToDisplay when loadAllCryptoCurrencies mothod invoked', () => {
    const setCurrenciesToDisplaySpy = spyOn<any>(
      component,
      'setCurrenciesToDisplay'
    );
    component['loadAllCryptoCurrencies']();
    expect(setCurrenciesToDisplaySpy).toHaveBeenCalled();
  });

  it('should unsubscribe when listenOnSelectedCurrenciesPrices mothod invoked', () => {
    const unsubscribeSpy = spyOn<any>(component, 'unsubscribe');
    component['listenOnSelectedCurrenciesPrices']();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should not updateCurrenciesPrices when listenOnSelectedCurrenciesPrices mothod invoked and no selected currencies', () => {
    const updateCurrenciesPricesSpy = spyOn<any>(
      component,
      'updateCurrenciesPrices'
    );
    component['selectedCurrencies'] = [];
    component['listenOnSelectedCurrenciesPrices']();
    expect(updateCurrenciesPricesSpy).not.toHaveBeenCalled();
  });

  it('should updateCurrenciesPrices when listenOnSelectedCurrenciesPrices mothod invoked and there selected currencies', (done) => {
    const updateCurrenciesPricesSpy = spyOn<any>(
      component,
      'updateCurrenciesPrices'
    );
    component['selectedCurrencies'] = [];
    component['listenOnSelectedCurrenciesPrices']();
    component['pricesWs'].subscribe({
      next: (msg) => {
        expect(updateCurrenciesPricesSpy).toHaveBeenCalled();
        done();
      },
    });
  });

  it('should call setTimeout when updateCurrenciesPrices mothod invoked', () => {
    const setTimeoutSpy = spyOn<any>(window, 'setTimeout');
    component['updateCurrenciesPrices']({ ethereum: '35000' });
    expect(setTimeoutSpy).toHaveBeenCalled();
  });

  it('should update ethereum price when updateCurrenciesPrices mothod invoked', () => {
    component['updateCurrenciesPrices']({ ethereum: '35000' });
    expect(component['currencies'][0].priceUsd).toEqual('35000');
  });

  it('should set changed equals true when updateCurrenciesPrices mothod invoked', () => {
    component['updateCurrenciesPrices']({ ethereum: '35000' });
    expect(component['currencies'][0].changed).toBeTruthy();
  });

  it('should set changed equals false after 300 ms when updateCurrenciesPrices mothod invoked', (done) => {
    component['updateCurrenciesPrices']({ ethereum: '35000' });
    setTimeout(() => {
      expect(component['currencies'][0].changed).toBeFalsy();
      done();
    }, 300);
  });

  it('should not call setTimeout when updateCurrenciesPrices mothod invoked', () => {
    const setTimeoutSpy = spyOn<any>(window, 'setTimeout');
    component['updateCurrenciesPrices']({ bitcoin: '35000' });
    expect(setTimeoutSpy).not.toHaveBeenCalled();
  });

  it('should navigate when openAdd mothod invoked', inject(
    [Router],
    (router: Router) => {
      const navigateSpy = spyOn(router, 'navigate');
      component.openAdd();
      expect(navigateSpy).toHaveBeenCalledWith([
        PAGES_CONFIG.cryptoCurrency.children.add.route,
      ]);
    }
  ));
});
