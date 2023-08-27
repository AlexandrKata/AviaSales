import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: false,
  nonStop: false,
  oneTransplant: false,
  twoTransplant: false,
  threeTransplant: false,
  types: { cheap: 'cheap', fast: 'fast', optimal: 'optimal' },
  ticketsType: '',
};

export const filtersSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    all: (state, action) => {
      state.all = !action.payload;
      state.nonStop = !action.payload;
      state.oneTransplant = !action.payload;
      state.twoTransplant = !action.payload;
      state.threeTransplant = !action.payload;
    },
    nonStop: (state, action) => {
      state.nonStop = !action.payload;
    },
    oneTransplant: (state, action) => {
      state.oneTransplant = !action.payload;
    },
    twoTransplant: (state, action) => {
      state.twoTransplant = !action.payload;
    },
    threeTransplant: (state, action) => {
      state.threeTransplant = !action.payload;
    },
    setTicketType: (state, action) => {
      state.ticketsType = action.payload;
    },
  },
});

export const { all, nonStop, oneTransplant, twoTransplant, threeTransplant, setTicketType } = filtersSlice.actions;

export default filtersSlice.reducer;
