import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tCurrency',
})
export class TCurrencyPipe implements PipeTransform {
  private currency: string = 'USD';

  transform(value: number | string): string {
    const formattedNumber = new CurrencyPipe('en').transform(
      +value,
      this.currency,
      '',
      '0.0-10'
    );
    return `${formattedNumber} ${this.currency}`;
  }
}
