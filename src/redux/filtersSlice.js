import { createSlice } from '@reduxjs/toolkit';

const type = {
  cheap: 'cheap',
  fast: 'fast',
  optimal: 'optimal',
};

const initialState = {
  all: false,
  nonStop: false,
  oneTransplant: false,
  twoTransplant: false,
  threeTransplant: false,
  ticketsType: type,
};

export const sidebarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    toggleFilters: (state, action) => {
      const filter = action.payload;
      if (filter === 'all') {
        state.all = !state[filter];
        state.nonStop = !!state[filter];
        state.oneTransplant = !!state[filter];
        state.twoTransplant = !!state[filter];
        state.threeTransplant = !!state[filter];
      } else {
        state[filter] = !state[filter];
        state.all = state[false];
      }
    },
    setTicketType: (state, action) => {
      console.log(state, action);
      state.ticketsType = action.payload;
    },
  },
});

export const { toggleFilters, setTicketType } = sidebarSlice.actions;

export default sidebarSlice.reducer;
