import dotenv from 'dotenv';

dotenv.config();
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES = process.env.JWT_EXPIRES;
export const PORT = process.env.PORT || 5000;
export const KEY = new TextEncoder().encode(JWT_SECRET);
