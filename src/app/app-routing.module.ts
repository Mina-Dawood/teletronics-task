import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGES_CONFIG } from '@app/shared';
import { AuthenticationGuard } from '@app/shared';

const routes: Routes = [
  {
    path: '',
    redirectTo: PAGES_CONFIG.home.name,
    pathMatch: 'full',
  },
  {
    path: PAGES_CONFIG.home.name,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: PAGES_CONFIG.cryptoCurrency.name,
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/crypto-currency/crypto-currency.module').then(
        (m) => m.CryptoCurrencyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
