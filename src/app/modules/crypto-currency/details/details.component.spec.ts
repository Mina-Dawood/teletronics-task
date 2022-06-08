import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { PAGES_CONFIG } from '@app/shared/constants';
import {
  ActivatedRouteMock,
  CryptoCurrencyServiceMock,
  RouterMock,
} from '@app/shared/mocks';
import { CryptoCurrencyService } from '@app/shared/services';
import { TranslateModule } from '@ngx-translate/core';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: CryptoCurrencyService, useClass: CryptoCurrencyServiceMock },
        { provide: Router, useClass: RouterMock },
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when back mothod invoked', inject(
    [Router],
    (router: Router) => {
      const navigateSpy = spyOn(router, 'navigate');
      component.back();
      expect(navigateSpy).toHaveBeenCalledWith([
        PAGES_CONFIG.cryptoCurrency.children.dashboard.route,
      ]);
    }
  ));

  it('should call getItemById when ngOnInit mothod invoked and there id param', inject(
    [CryptoCurrencyService],
    (cryptoCurrencyService: CryptoCurrencyService) => {
      const getItemByIdSpy = spyOn(cryptoCurrencyService, 'getItemById');
      component.ngOnInit();
      expect(getItemByIdSpy).toHaveBeenCalled();
    }
  ));

  it('should call back when ngOnInit mothod invoked and no id param', inject(
    [ActivatedRoute],
    (route: ActivatedRoute) => {
      const backSpy = spyOn(component, 'back');
      spyOn(route.snapshot.queryParamMap, 'get').and.returnValue('');
      component.ngOnInit();
      expect(backSpy).toHaveBeenCalled();
    }
  ));
});
