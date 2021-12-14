import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';

function* log(action: PayloadAction) {
  console.log('Log', action);
}

export default function* () {
  console.log('Counter Saga!');
  yield takeEvery('*', log);
}
