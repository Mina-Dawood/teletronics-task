import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TCurrencyPipe } from '@app/shared/pipes';

import { RoundedCurrencyComponent } from './rounded-currency.component';

describe('RoundedCurrencyComponent', () => {
  let component: RoundedCurrencyComponent;
  let fixture: ComponentFixture<RoundedCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoundedCurrencyComponent, TCurrencyPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(RoundedCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
