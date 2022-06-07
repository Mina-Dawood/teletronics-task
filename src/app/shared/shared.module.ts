import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyCardComponent } from './widgets/currency-card/currency-card.component';
import { TCurrencyPipe } from '@app/shared/pipes';

const SHARED_COMPONENTS = [
  LoaderComponent,
  ButtonComponent,
  CurrencyCardComponent,
];
const SHARED_PIPES = [TCurrencyPipe];
const SHARED_MODULES = [TranslateModule];

@NgModule({
  declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES],
  imports: [CommonModule, ...SHARED_MODULES],
  exports: [...SHARED_COMPONENTS, ...SHARED_PIPES, ...SHARED_MODULES],
})
export class SharedModule {}
