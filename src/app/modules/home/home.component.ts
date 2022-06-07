import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, LocalStorageService } from '@app/shared/services';
import { DEFAULT_SELECTED_CURRENCIES, PAGES_CONFIG } from '@app/shared/constants';


@Component({
  selector: 'teletronics-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  /**
   * Method for simulate login and check if logged in successfully then navigate to items page
   */
  getStarted(): void {
    this.authenticationService.login().subscribe((loggedIn) => {
      if (loggedIn) {
        this.setDefaultCurrencies();
        this.router.navigate([PAGES_CONFIG.cryptoCurrency.route]);
      }
    });
  }

  /**
   * Method to check if no currencies selected before then set default currencies to be displayed on dashboard page
   */
  private setDefaultCurrencies(): void {
    const selectedCurrencies = LocalStorageService.getSelectedCurrencies();
    if (!selectedCurrencies) {
      LocalStorageService.setSelectedCurrencies(
        DEFAULT_SELECTED_CURRENCIES.split(',')
      );
    }
  }
}
