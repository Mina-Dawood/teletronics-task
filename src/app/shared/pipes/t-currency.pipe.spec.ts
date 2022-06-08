import { CurrencyPipe } from '@angular/common';
import { TCurrencyPipe } from './t-currency.pipe';

describe('TCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new TCurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should use currency pipe transform', () => {
    const transformSpy = spyOn(CurrencyPipe.prototype, 'transform');
    const pipe = new TCurrencyPipe();
    pipe.transform(2.9);
    expect(transformSpy).toHaveBeenCalled();
  });
});
