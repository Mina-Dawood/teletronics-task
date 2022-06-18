import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyCardComponent } from './widgets/currency-card/currency-card.component';
import { TCurrencyPipe } from '@app/shared/pipes';
import { RoundedCurrencyComponent } from './widgets/rounded-currency/rounded-currency.component';
import { FilterPipe } from './pipes/filter.pipe';

const SHARED_COMPONENTS = [
  LoaderComponent,
  ButtonComponent,
  CurrencyCardComponent,
  RoundedCurrencyComponent,
];
const SHARED_PIPES = [TCurrencyPipe, FilterPipe];
const SHARED_MODULES = [TranslateModule];

@NgModule({
  declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES],
  imports: [CommonModule, ...SHARED_MODULES],
  exports: [...SHARED_COMPONENTS, ...SHARED_PIPES, ...SHARED_MODULES],
})
export class SharedModule {}
