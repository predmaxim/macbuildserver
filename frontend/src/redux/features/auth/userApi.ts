import {createAsyncThunk} from '@reduxjs/toolkit';
import {NextRequest} from 'next/server';
import {FormAuthCredentialsType} from '@/types/globals';
import {AUTH_URL} from '@/libs/constants';
import {encrypt} from '@/libs/jwt';

export const login = createAsyncThunk(
  'user/login',
  async (credentials: FormAuthCredentialsType) => {
    const {email, password, remember} = credentials;
    const token = await encrypt({user: {email, password}, remember});
    const response = await fetch(`${AUTH_URL}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    });
    return await response.json();
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async () => {

    return;
  }
);

export const updateSession = createAsyncThunk(
  'user/updateSession',
  async (request: NextRequest) => {
    // const session = request.cookies.get('session')?.value;
    // if (!session) return;
    //
    // // Refresh the session so it doesn't expire
    // const parsed = await decrypt(session);
    // parsed.expires = new Date(Date.now() + 300 * 1000);
    // const res = NextResponse.next();
    // res.cookies.set({
    //   name: 'session',
    //   value: await encrypt(parsed),
    //   httpOnly: true,
    //   expires: parsed.expires
    // });
    // return res;
  }
);

export const getSession = () => createAsyncThunk(
  'user/getSession',
  async () => {
    // const session = cookies().get('session')?.value;
    // if (!session) return null;
    // return await decrypt(session);
  }
);
