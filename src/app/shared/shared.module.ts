import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

const SHARED_COMPONENTS = [LoaderComponent, ButtonComponent];
const SHARED_MODULES = [TranslateModule];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [CommonModule, ...SHARED_MODULES],
  exports: [...SHARED_COMPONENTS, ...SHARED_MODULES],
})
export class SharedModule {}
