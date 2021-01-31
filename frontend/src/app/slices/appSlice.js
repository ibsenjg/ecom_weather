import { createSlice } from '@reduxjs/toolkit';

export const appSplice = createSlice({
  name: 'app',
  initialState: {
    cities: [],
    selectedDay: null,
    selectedCity: {},
  },
  reducers: {
    setDay: (state, { payload }) => {
      state.selectedDay = payload;
    },
    setCities: (state, { payload }) => {
      state.cities = payload;
    },
    setCity: (state, { payload }) => {
      state.selectedCity = payload;
    },
  },
});

export const { setDay, setCities, setCity } = appSplice.actions;
export default appSplice.reducer;
