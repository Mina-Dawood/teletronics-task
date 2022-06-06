import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';

const SHARED_COMPONENTS = [LoaderComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [CommonModule],
  exports: [...SHARED_COMPONENTS],
})
export class SharedModule {}
