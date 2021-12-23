import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { User } from './../../models/user';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  isLogging: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  isLogging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.isLogging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.isLogging = false;
      state.currentUser = action.payload;
    },
    loginFail(state, action: PayloadAction<string>) {
      state.isLogging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoginIn;
export const selectIsLogging = (state: any) => state.auth.isLogging;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
