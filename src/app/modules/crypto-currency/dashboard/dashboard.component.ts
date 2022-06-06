import { Component, OnDestroy, OnInit } from '@angular/core';
import { CryptoCurrencyService } from '@app/shared';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'teletronics-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly cryptoCurrencyService: CryptoCurrencyService) {}

  ngOnInit(): void {
    this.cryptoCurrencyService
      .getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
