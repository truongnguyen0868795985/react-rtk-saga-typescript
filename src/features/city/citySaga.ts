import { City, ListResponse } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';

import { cityActions } from './citySlice';
import cityApi from 'api/cityApi';

function* fetchCityList() {
  try {
    const response: ListResponse<City> = yield call(cityApi.getAll);

    yield put(cityActions.fetchCityListSuccess(response));
  } catch (err) {}
}

export default function* citySaga() {
  yield takeLatest(cityActions.fetchCityList.type, fetchCityList);
}
