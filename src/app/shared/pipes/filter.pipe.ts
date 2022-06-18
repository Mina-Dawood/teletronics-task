import { CryptoCurrency } from '@app/shared/interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arr: CryptoCurrency[], search: string): CryptoCurrency[] {
    if (!arr) {
      return [];
    }

    if (!search) {
      return arr;
    }

    return arr.filter((currency) =>
      currency.name?.toLowerCase()?.includes(search.toLowerCase())
    );
  }
}
