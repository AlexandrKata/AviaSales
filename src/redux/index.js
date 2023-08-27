import { configureStore, combineReducers } from '@reduxjs/toolkit';

import filtersReducer from './filtersSlice';
import ticketsReducer from './ticketsSlice';

const rootReducer = combineReducers({
  filters: filtersReducer,
  tickets: ticketsReducer,
});

export const store = configureStore({
  reducer: { root: rootReducer },
});
