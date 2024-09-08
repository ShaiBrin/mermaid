import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, FormControl, InputLabel, MenuItem, Select, Grid, TextField, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { format, addDays } from 'date-fns';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate, setSelectedTime } from '@/app/store/preferencesSlice';
import { RootState } from '@/app/store';

const generateTimeOptions = () => {
  const times = [];
  
  // Get the current time
  const now = new Date();
  const currentHour24 = now.getHours();
  const currentMinutes = now.getMinutes();
  
  // Format current time for the "Now" option
  const currentHour12 = currentHour24 % 12 === 0 ? 12 : currentHour24 % 12;
  const currentPeriod = currentHour24 < 12 ? 'AM' : 'PM';
  const currentTimeFormatted = `${currentHour12}:${currentMinutes < 10 ? '0' : ''}${currentMinutes} ${currentPeriod}`;

  // Add "Now" option
  times.push(`Now ${currentTimeFormatted}`);

  // Generate time options in 30-minute intervals
  for (let i = 0; i < 12 * 2; i++) {
    const hour24 = Math.floor(i / 2);
    const minutes = i % 2 === 0 ? '00' : '30';
    
    // Convert 24-hour time to 12-hour format
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
    const period = hour24 < 12 ? 'AM' : 'PM';
    
    times.push(`${hour12}:${minutes} ${period}`);
  }
  
  return times;
};

const DateTimePicker = () => {
  const dispatch = useDispatch();
  const { selectedDate, selectedTime } = useSelector((state: RootState) => state.preferences);
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
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CalendarMonthIcon sx={{ mr: 1 }} /> {/* Icon for date picker */}
                      {selectedDate ? format(new Date(selectedDate), 'yyyy/MM/dd') : "Today"}
                    </Box>
                  } 
                  variant="outlined" 
                />
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginTop: 2 }}>
          <InputLabel id="time-picker-label">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ mr: 1 }} /> {/* Icon for time picker */}
                {selectedTime ? "Time" : "Now"}
              </Box>
            </InputLabel>            <Select
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
