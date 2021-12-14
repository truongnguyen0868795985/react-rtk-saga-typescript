import CounterSaga from 'features/counter/CounterSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('Root saga');
  yield all([helloSaga(), CounterSaga()]);
}

function* helloSaga() {
  console.log('HelloSaga');
}
