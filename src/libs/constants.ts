export const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;
export const JWT_EXPIRES = process.env.NEXT_PUBLIC_JWT_EXPIRES;
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
export const KEY = new TextEncoder().encode(JWT_SECRET);
