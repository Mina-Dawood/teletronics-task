import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PAGES_CONFIG } from '@app/shared/constants';
import { CryptoCurrency } from '@app/shared/interfaces';
import { CryptoCurrencyService } from '@app/shared/services';

@Component({
  selector: 'teletronics-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  currencyData$!: Observable<CryptoCurrency | any>;

  constructor(
    private readonly cryptoCurrencyService: CryptoCurrencyService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const currencyId = this.route.snapshot.queryParamMap.get('id');
    if (!currencyId) {
      this.back();
    } else {
      this.currencyData$ = this.cryptoCurrencyService.getItemById(currencyId);
    }
  }

  /**
   * Method to go back to the live dashboard
   */
  back(): void {
    this.router.navigate([
      PAGES_CONFIG.cryptoCurrency.children.dashboard.route,
    ]);
  }
}
