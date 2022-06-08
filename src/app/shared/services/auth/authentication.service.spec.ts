import { LocalStorageService } from '@app/shared/services';
import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocalStorageServiceMock, RouterMock } from '@app/shared/mocks';

import { AuthenticationService } from './authentication.service';
import { PAGES_CONFIG } from '@app/shared/constants';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useClass: RouterMock,
        },
        {
          provide: LocalStorageService,
          useClass: LocalStorageServiceMock,
        },
      ],
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set token in local storage when login method invoked', () => {
    const setItemSpy = spyOn(LocalStorageService, 'setToken').and.callFake(
      LocalStorageServiceMock.setToken
    );
    service.login();
    expect(setItemSpy).toHaveBeenCalled();
  });

  it('should remove token from local storage when logout method invoked', () => {
    const removeItemSpy = spyOn(
      LocalStorageService,
      'removeToken'
    ).and.callFake(LocalStorageServiceMock.removeToken);
    service.logout();
    expect(removeItemSpy).toHaveBeenCalled();
  });

  it('should remove token from local storage when logout method invoked', inject(
    [Router],
    (router: Router) => {
      const navigateSpy = spyOn(router, 'navigate');
      service.logout();
      expect(navigateSpy).toHaveBeenCalledWith([PAGES_CONFIG.home.route]);
    }
  ));
});
