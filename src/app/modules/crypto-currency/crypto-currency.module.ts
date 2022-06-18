import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
// COMPONENTS
import { CryptoCurrencyRoutingModule } from './crypto-currency-routing.module';
import { CryptoCurrencyComponent } from './crypto-currency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { AddCryptoCurrencyComponent } from './add-crypto-currency/add-crypto-currency.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CryptoCurrencyComponent,
    DashboardComponent,
    DetailsComponent,
    AddCryptoCurrencyComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, CryptoCurrencyRoutingModule, SharedModule, ReactiveFormsModule],
})
export class CryptoCurrencyModule {}
