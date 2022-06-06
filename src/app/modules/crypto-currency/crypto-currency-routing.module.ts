import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGES_CONFIG } from '@app/shared';
import { CryptoCurrencyComponent } from './crypto-currency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { AddCryptoCurrencyComponent } from './add-crypto-currency/add-crypto-currency.component';

const routes: Routes = [
  {
    path: '',
    component: CryptoCurrencyComponent,
    children: [
      {
        path: '',
        redirectTo: PAGES_CONFIG.cryptoCurrency.children.dashboard.name,
        pathMatch: 'full',
      },
      {
        path: PAGES_CONFIG.cryptoCurrency.children.dashboard.name,
        component: DashboardComponent,
      },
      {
        path: PAGES_CONFIG.cryptoCurrency.children.details.name,
        component: DetailsComponent,
      },
      {
        path: PAGES_CONFIG.cryptoCurrency.children.add.name,
        component: AddCryptoCurrencyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoCurrencyRoutingModule {}
