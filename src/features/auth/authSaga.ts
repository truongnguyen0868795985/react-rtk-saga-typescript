import { LoginPayload, authActions } from './authSlice';
import { call, delay, fork, put, take } from 'redux-saga/effects';

import { PayloadAction } from '@reduxjs/toolkit';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000);

    console.log('Handle login', payload);
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'leader',
      })
    );
  } catch (err) {
    yield put(authActions.loginFail('login fail'));
  }

  // todo: redirect to admin page
}

function* handleLogout() {
  yield delay(1000);
  console.log('Handle logout');
  localStorage.removeItem('access_token');
  // redirect to login page
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    console.log('Watch login', isLoggedIn);

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
