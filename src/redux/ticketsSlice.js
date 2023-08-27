import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getTickets = async () => {
  const searchId = await fetch('https://aviasales-test-api.kata.academy/search');
  const searchIdResponse = await searchId.json();

  const tickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchIdResponse.searchId}`);
  const TicketsResponse = await tickets.json();
  return TicketsResponse;
};

export const fetchTickets = createAsyncThunk('tickets/fetchSearchId', getTickets);

const initialState = {
  tickets: [],
  status: null,
  error: null,
  loading: true,
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: {
    //загрузка
    [fetchTickets.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    //данные успешно получены
    [fetchTickets.fulfilled]: (state, action) => {
      console.log(action);
      state.tickets = action.payload.tickets;
      state.status = 'ok';
      state.loading = action.payload.stop;
    },
    //ошибка
    [fetchTickets.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default ticketsSlice.reducer;
