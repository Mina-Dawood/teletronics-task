import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CryptoCurrency } from '@app/shared/interfaces';
import { PAGES_CONFIG } from '@app/shared/constants';

@Component({
  selector: 'teletronics-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
})
export class CurrencyCardComponent {
  @Input() currencyData!: CryptoCurrency;
  @Input() buttonText!: string;
  @Input() isSelected!: boolean;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private readonly router: Router) {}

  /**
   * Method to open details page of clicked currency card
   */
  openDetails(): void {
    this.router.navigate([PAGES_CONFIG.cryptoCurrency.children.details.route], {
      queryParams: { id: this.currencyData?.id },
    });
  }
}
