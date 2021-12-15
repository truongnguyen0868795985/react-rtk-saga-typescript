import { all } from 'redux-saga/effects';
import counterSaga from 'features/counter/CounterSaga';

export default function* rootSaga() {
  console.log('Root saga');
  yield all([helloSaga(), counterSaga()]);
}

function* helloSaga() {
  console.log('HelloSaga');
}
