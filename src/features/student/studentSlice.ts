import { ListParams, Student } from 'models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from 'app/store';

interface StudentState {
  loading: boolean;
  list: Student[];
  filter: ListParams;
  pagination: ListParams;
}

const initialState: StudentState = {
  loading: false,
  list: [],
  filter: {
    _page: 1,
    _limit: 15,
  },
  pagination: {
    _page: 1,
    _limit: 15,
    _totalRows: 15,
  },
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    fetchStudentList(state: StudentState, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchStudentListSuccess(state: StudentState, action: PayloadAction<ListParams>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchStudentListFailed(state: StudentState) {
      state.loading = false;
    },
    setFilter(state: StudentState, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },
  },
});

// actions
export const studentActions = studentSlice.actions;
// selectors
export const selectStudentList = (state: RootState) => state.student.list;
export const selectStudentLoading = (state: RootState) => state.student.loading;
export const selectStudentFilter = (state: RootState) => state.student.filter;
export const selectStudentPagination = (state: RootState) => state.student.pagination;

// reducer
const studentReducer = studentSlice.reducer;
export default studentReducer;
