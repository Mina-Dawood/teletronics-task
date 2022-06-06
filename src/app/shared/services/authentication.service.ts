import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocalStorageService, PAGES_CONFIG } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router) {}

  login(): Observable<boolean> {
    /** Simulate that we store JWT in local storage */
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw';
    LocalStorageService.setToken(token);

    return of(true);
  }

  logout(): void {
    LocalStorageService.removeToken();
    this.router.navigate([PAGES_CONFIG.home.route]);
  }
}
