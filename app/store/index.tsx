import { configureStore } from '@reduxjs/toolkit';
import maidReducer from './maidSlice';

export const store = configureStore({
  reducer: {
    maid: maidReducer,
  },
});

export default store;
