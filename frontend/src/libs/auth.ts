import {cookies} from 'next/headers';
import {decrypt, encrypt} from '@/libs/jwt';
import {NextRequest, NextResponse} from 'next/server';

export const getSession = async () => {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
};

export const updateSession = async (request: NextRequest) => {
  const session = request.cookies.get('session')?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 300 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires
  });
  return res;
};

// export const login = async (formData: FormData) => {
//   // Verify credentials && get the user
//
//   const user = {
//     email: formData.get('email'),
//     password: formData.get('password')
//   };
//
//   // Create the session
//   const expires = new Date(Date.now() + 300 * 1000);
//   const session = await encrypt({user, expires});
//
//   // Save the session in a cookie
//   cookies().set('session', session, {expires, httpOnly: true});
// };
//
// export const logout = async () => {
//   // Destroy the session
//   cookies().set('session', '', {expires: new Date(0)});
// };

//
