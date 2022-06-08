import { Observable, of } from "rxjs";
import { ITEMS_MOCK } from ".";

export class HttpMock {
    get(url: string): Observable<any> {
        return of(ITEMS_MOCK)
    }
}