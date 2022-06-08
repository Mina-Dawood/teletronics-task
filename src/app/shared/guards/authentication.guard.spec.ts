import { PAGES_CONFIG } from '@app/shared/constants';
import { LocalStorageServiceMock, RouterMock } from '@app/shared/mocks';
import { LocalStorageService } from '@app/shared/services';
import { inject, TestBed } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';
import { Router } from '@angular/router';

describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useClass: RouterMock,
        },
      ],
    });
    guard = TestBed.inject(AuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if token exists in local storage', inject(
    [Router],
    (router: Router) => {
      spyOn(LocalStorageService, 'getToken').and.callFake(
        LocalStorageServiceMock.getToken
      );
      const routerSpy = spyOn(router, 'navigate');
      guard.canActivate();
      expect(routerSpy).not.toHaveBeenCalled();
    }
  ));

  it('should return true if token exists in local storage', inject(
    [Router],
    (router: Router) => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      const routerSpy = spyOn(router, 'navigate');
      guard.canActivate();
      expect(routerSpy).toHaveBeenCalledWith([PAGES_CONFIG.home.route]);
    }
  ));
});
