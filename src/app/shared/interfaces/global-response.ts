export interface GlobalResponse<T> {
  data: T | T[];
  timestamp: number;
}
