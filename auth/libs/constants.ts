import dotenv from 'dotenv';

dotenv.config();
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES = process.env.JWT_EXPIRES;
export const PORT = process.env.PORT;
export const APP_URL = process.env.FRONT_APP_URL;
export const KEY = new TextEncoder().encode(JWT_SECRET);
