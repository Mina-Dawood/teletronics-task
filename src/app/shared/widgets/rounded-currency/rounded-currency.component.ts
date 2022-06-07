import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CryptoCurrency } from '@app/shared/interfaces';

@Component({
  selector: 'teletronics-rounded-currency',
  templateUrl: './rounded-currency.component.html',
  styleUrls: ['./rounded-currency.component.scss'],
})
export class RoundedCurrencyComponent {
  @Input() currencyData!: CryptoCurrency;
  @Input() isSelected!: boolean;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
