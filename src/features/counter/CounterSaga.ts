import { delay, put, takeLatest } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

import { PayloadAction } from '@reduxjs/toolkit';

// function* log(action: PayloadAction) {
//   console.log('Log', action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 2s');

  yield delay(2000);

  console.log('Waiting done, dispatch increment action');

  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('Counter Saga!');
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
