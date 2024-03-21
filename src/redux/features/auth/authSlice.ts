import {createSlice} from '@reduxjs/toolkit';
import {UserCredentialsType} from '@/types/globals';
import {login, logout} from '@/redux/features/auth/userApi';

export type UserStateType = UserCredentialsType;

type UserPayloadType = UserStateType;

type UserActionType = {
  payload: UserPayloadType,
  type: string
}

const initialState = {
  value: {
    email: '',
    session: '',
    isLoading: false,
    isLogged: false
  }
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action: UserActionType) => {
      state.value = {...state, ...action.payload, isLoading: false};
    },
    removeCredentials: (state) => {
      state.value = initialState.value;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.value = {...state.value, isLoading: true};
      })
      .addCase(login.fulfilled, (state, action: UserActionType) => {
        state.value = {...state, ...action.payload, isLoading: false};
      })
      .addCase(logout.fulfilled, (state) => {
        state.value = initialState.value;
      });
  }
});

export const {
  setCredentials,
  removeCredentials
} = authSlice.actions;

export default authSlice.reducer;
