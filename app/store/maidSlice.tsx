import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: ['Broom', 'Window', 'Kitchen'],
  locations: ['Montreal', 'Laval'],
  selectedServices: [],
  selectedLocation: '',
};

const maidSlice = createSlice({
  name: 'maid',
  initialState,
  reducers: {
    setSelectedServices: (state, action) => {
      state.selectedServices = action.payload;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const { setSelectedServices, setSelectedLocation } = maidSlice.actions;
export default maidSlice.reducer;
