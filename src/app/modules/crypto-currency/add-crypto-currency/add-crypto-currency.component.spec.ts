import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCryptoCurrencyComponent } from './add-crypto-currency.component';

describe('AddCryptoCurrencyComponent', () => {
  let component: AddCryptoCurrencyComponent;
  let fixture: ComponentFixture<AddCryptoCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCryptoCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCryptoCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
