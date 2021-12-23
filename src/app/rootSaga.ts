import { all } from 'redux-saga/effects';
import authSaga from 'features/auth/authSaga';
import counterSaga from 'features/counter/CounterSaga';

export default function* rootSaga() {
  console.log('Root saga');
  yield all([authSaga(), counterSaga()]);
}

function* helloSaga() {
  console.log('HelloSaga');
}
