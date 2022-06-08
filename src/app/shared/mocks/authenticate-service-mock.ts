import { Observable, of } from "rxjs";

export class AuthenticationServiceMock {
    login(): Observable<boolean> {
        return of(true);
      }
    
      logout(): void {
        // Do nothing
      }
}
