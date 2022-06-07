import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PAGES_CONFIG } from '@app/shared/constants';

@Component({
  selector: 'teletronics-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}

  /**
   * Method to navigate to add page, so we can add/remove currencies
   */
  openAdd(): void {
    this.router.navigate([PAGES_CONFIG.cryptoCurrency.children.add.route]);
  }
}
