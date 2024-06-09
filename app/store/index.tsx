// store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import maidReducer from './maidSlice';

export const store = configureStore({
  reducer: {
    maid: maidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
