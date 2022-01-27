import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { City } from 'models';
import { ListResponse } from './../../models/commons';
import { RootState } from 'app/store';

export interface CityState {
  loading: Boolean;
  list: City[];
}

const initialState: CityState = {
  loading: false,
  list: [],
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    fetchCityList(state) {
      state.loading = true;
    },
    fetchCityListSuccess(state, action: PayloadAction<ListResponse<City>>) {
      state.loading = false;
      state.list = action.payload.data;
    },
    fetchCityListFailed(state) {
      state.loading = false;
    },
  },
});

// actions
export const cityActions = citySlice.actions;

// selector
export const selectCityList = (state: RootState) => state.city.list;
export const selectCityMap = createSelector(selectCityList, (cityList) =>
  cityList.reduce((a: { [key: string]: City }, city) => {
    a[city.code] = city;
    return a;
  }, {})
);

// reducer
const cityReducer = citySlice.reducer;
export default cityReducer;
