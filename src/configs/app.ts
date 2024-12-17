import 'dotenv/config';

export const PORT = process.env.PORT ?? 4444;
export const SENDGRID_API_KEY =
  process.env.SENDGRID_API_KEY ?? 'sendgrid-api-key';
export const NO_REPLY_EMAIL = process.env.NO_REPLY_EMAIL ?? '';
