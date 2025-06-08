export type UserAgent = {
  timestamp?: Date;
  userAgent: string;
  language: string;
  ip: string;
  location: string;
  extraData?: Record<string, unknown>;
}
