import { ListParams, ListResponse, Student } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';

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

export default function* studentSaga() {
  yield takeLatest(studentActions.fetchStudentList, fetchStudentList);
}
