import { ListParams, ListResponse, Student } from 'models';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';

import { PayloadAction } from '@reduxjs/toolkit';
import { studentActions } from './studentSlice';
import studentApi from 'api/studentApi';

function* fetchStudentList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Student> = yield call(studentApi.getAll, action.payload);
    yield put(studentActions.fetchStudentListSuccess(response));
  } catch (err) {
    yield put(studentActions.fetchStudentListFailed());
  }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  yield put(studentActions.setFilter(action.payload));
}

export default function* studentSaga() {
  yield takeLatest(studentActions.fetchStudentList, fetchStudentList);

  yield debounce(500, studentActions.setFilterWithDebounce.type, handleSearchDebounce);
}
