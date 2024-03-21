'use client';

import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/auth/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
  });
};

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
