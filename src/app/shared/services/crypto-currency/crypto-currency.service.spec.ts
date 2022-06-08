import { HttpClient, HttpHandler } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { HttpMock, ITEMS_MOCK } from '@app/shared/mocks';
import { of } from 'rxjs';

import { CryptoCurrencyService } from './crypto-currency.service';

describe('CryptoCurrencyService', () => {
  let service: CryptoCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useClass: HttpMock,
        },
        HttpHandler,
      ],
    });
    service = TestBed.inject(CryptoCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http.get when getItems invoked', inject(
    [HttpClient],
    (http: HttpClient) => {
      const getSpy = spyOn(http, 'get').and.returnValue(of([]));
      service.getItems();
      expect(getSpy).toHaveBeenCalled();
    }
  ));

  it('should call http.get when getItemById invoked', inject(
    [HttpClient],
    (http: HttpClient) => {
      const getSpy = spyOn(http, 'get').and.returnValue(of([]));
      service.getItemById('bitcoin');
      expect(getSpy).toHaveBeenCalled();
    }
  ));

  it('should return originalItems if data already loaded', () => {
    service['originalItems'] = [];
    service.getItems().subscribe((items) => {
      expect(items.length).toEqual(0);
    });
  });

  it('should set originalItems if no data loaded', () => {
    service.getItems().subscribe((items) => {
      expect(items).toEqual(service['originalItems']);
    });
  });

  it('should call http.get when getItemById invoked', inject(
    [HttpClient],
    (http: HttpClient) => {
      const getSpy = spyOn(http, 'get').and.returnValue(of({ data: null }));
      service.getItemById('bitcoin').subscribe((item) => {
        expect(item).toBeNull();
      });
    }
  ));
});
