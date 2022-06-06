import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, PAGES_CONFIG } from '@app/shared';

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
        this.router.navigate([PAGES_CONFIG.cryptoCurrency.route]);
      }
    });
  }
}
