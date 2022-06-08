import { TCurrencyPipe } from '@app/shared/pipes';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterMock } from '@app/shared/mocks';

import { CurrencyCardComponent } from './currency-card.component';
import { PAGES_CONFIG } from '@app/shared/constants';

describe('CurrencyCardComponent', () => {
  let component: CurrencyCardComponent;
  let fixture: ComponentFixture<CurrencyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyCardComponent, TCurrencyPipe],
      providers: [
        {
          provide: Router,
          useClass: RouterMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when openDetails mothod invoked', inject(
    [Router],
    (router: Router) => {
      const navigateSpy = spyOn(router, 'navigate');
      component.openDetails();
      expect(navigateSpy).toHaveBeenCalled();
    }
  ));
});
