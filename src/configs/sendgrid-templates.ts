import 'dotenv/config';

export const SENDGRID_TEMPLATES = {
  SEND_CREATE_USER: process.env.SEND_CREATE_USER ?? '',
};
