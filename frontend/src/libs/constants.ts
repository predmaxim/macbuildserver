export const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;
export const JWT_EXPIRES = process.env.NEXT_PUBLIC_JWT_EXPIRES;
export const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
export const KEY = new TextEncoder().encode(JWT_SECRET);
