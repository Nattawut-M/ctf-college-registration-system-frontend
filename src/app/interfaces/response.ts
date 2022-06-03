export interface Response {
  status?: number;
  message?: string | null;
  payload: any;
  timestamp: Date;
}
