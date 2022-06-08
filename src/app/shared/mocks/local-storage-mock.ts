export const localStorageMock = {
  getItem: (key: string): string => {
    return 'test-token';
  },
  setItem: (key: string, value: string) => {
    // Do nothing
  },
  removeItem: (key: string) => {
    // Do nothing
  },
};
