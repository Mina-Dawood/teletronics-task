export class ActivatedRouteMock {
  snapshot = {
    queryParamMap: {
      get(paramName: string): string | null {
        return 'bitcoin';
      },
    },
  };
}
