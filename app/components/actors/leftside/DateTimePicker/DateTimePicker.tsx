import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, FormControl, InputLabel, MenuItem, Select, Grid, TextField, Button } from '@mui/material';
import { format, addDays } from 'date-fns';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate, setSelectedTime } from '@/app/store/maidSlice';
import { RootState } from '@/app/store';

const generateTimeOptions = () => {
  const times = [];
  for (let i = 0; i < 24 * 2; i++) {
    const hour = Math.floor(i / 2);
    const minutes = i % 2 === 0 ? '00' : '30';
    times.push(`${hour.toString().padStart(2, '0')}:${minutes}`);
  }
  return times;
};

const DateTimePicker = () => {
  const dispatch = useDispatch();
  const { selectedDate, selectedTime } = useSelector((state: RootState) => state.maid);
  const timeOptions = generateTimeOptions();
  const tomorrow = addDays(new Date(), 1); // Set minDate to tomorrow

  const handleDateChange = (date: Date | null) => {
    if (date) {
      dispatch(setSelectedDate(date.toISOString())); // Store the date as an ISO string in Redux state
    }
  };

  const handleTimeChange = (event: { target: { value: string; }; }) => {
    dispatch(setSelectedTime(event.target.value));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box p={2} sx={{ border: '2px solid #ccc', borderRadius: '10px' }}>
          <FormControl fullWidth>
            <DatePicker
              selected={selectedDate ? new Date(selectedDate) : null} // Convert the string back to a Date object
              onChange={handleDateChange}
              minDate={tomorrow}
              customInput={
                <TextField 
                  label={selectedDate ? format(new Date(selectedDate), 'yyyy/MM/dd') : "Today"} 
                  variant="outlined" 
                />
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="time-picker-label">{selectedTime ? "Time" : "Now"}</InputLabel>
            <Select
              labelId="time-picker-label"
              id="time-picker"
              value={selectedTime}
              onChange={handleTimeChange}
              variant="outlined"
            >
              {timeOptions.map((time, index) => (
                <MenuItem key={index} value={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Link href="/maid/choose" passHref>
            <Button
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2, marginTop: 2 }}
            >
              Get Maid Now
            </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DateTimePicker;
