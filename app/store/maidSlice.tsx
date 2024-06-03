import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: ['Broom', 'Window', 'Kitchen'],
  locations: ['Montreal', 'Laval'],
  selectedServices: [],
  selectedLocation: '',
  selectedDate: '', // Add selectedDate
  selectedTime: '', // Add selectedTime
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
    setSelectedDate: (state, action) => { // Add setSelectedDate action
      state.selectedDate = action.payload;
    },
    setSelectedTime: (state, action) => { // Add setSelectedTime action
      state.selectedTime = action.payload;
    },
  },
});

export const { setSelectedServices, setSelectedLocation, setSelectedDate, setSelectedTime } = maidSlice.actions;
export default maidSlice.reducer;
