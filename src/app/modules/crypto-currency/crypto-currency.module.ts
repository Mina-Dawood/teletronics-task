import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoCurrencyRoutingModule } from './crypto-currency-routing.module';
import { CryptoCurrencyComponent } from './crypto-currency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { AddCryptoCurrencyComponent } from './add-crypto-currency/add-crypto-currency.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    CryptoCurrencyComponent,
    DashboardComponent,
    DetailsComponent,
    AddCryptoCurrencyComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CryptoCurrencyRoutingModule
  ]
})
export class CryptoCurrencyModule { }
