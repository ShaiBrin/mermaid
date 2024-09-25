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

  const now = new Date();
  const currentHour24 = now.getHours();
  const currentMinutes = now.getMinutes();

  const currentHour12 = currentHour24 % 12 === 0 ? 12 : currentHour24 % 12;
  const currentPeriod = currentHour24 < 12 ? 'AM' : 'PM';
  const currentTimeFormatted = `${currentHour12}:${currentMinutes < 10 ? '0' : ''}${currentMinutes} ${currentPeriod}`;

  times.push(`Now ${currentTimeFormatted}`);

  let nextHour24 = currentHour24;
  let nextMinutes = currentMinutes < 30 ? 30 : 0;

  if (currentMinutes >= 30) {
    nextHour24 += 1;
  }

  while (nextHour24 < 24 || (nextHour24 === 23 && nextMinutes <= 30)) {
    const hour12 = nextHour24 % 12 === 0 ? 12 : nextHour24 % 12;
    const period = nextHour24 < 12 ? 'AM' : 'PM';
    const timeFormatted = `${hour12}:${nextMinutes === 0 ? '00' : '30'} ${period}`;

    times.push(timeFormatted);

    nextMinutes += 30;
    if (nextMinutes === 60) {
      nextMinutes = 0;
      nextHour24 += 1;
    }
  }

  return times;
};

const DateTimePicker = () => {
  const dispatch = useDispatch();
  const { selectedDate, selectedTime } = useSelector((state: RootState) => state.preferences);
  const timeOptions = generateTimeOptions();
  const tomorrow = addDays(new Date(), 1);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      dispatch(setSelectedDate(date.toISOString()));
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
              selected={selectedDate ? new Date(selectedDate) : null}
              onChange={handleDateChange}
              minDate={tomorrow}
              customInput={
                <TextField 
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CalendarMonthIcon sx={{ mr: 1 }} />
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
                <AccessTimeIcon sx={{ mr: 1 }} />
                {selectedTime ? "Time" : "Now"}
              </Box>
            </InputLabel>
            <Select
              labelId="time-picker-label"
              id="time-picker"
              value={selectedTime}
              onChange={handleTimeChange}
              variant="outlined"
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 300, // Limit dropdown height
                  },
                },
                // This ensures the dropdown scrolls to the selected time
                autoFocus: false,
                TransitionProps: {
                  onEntering: (menuElement: HTMLElement) => {
                    const selectedIndex = timeOptions.findIndex(time => time === selectedTime);
                    if (selectedIndex !== -1) {
                      const optionHeight = 48; // Approximate height of each option
                      const offset = optionHeight * selectedIndex;
                      menuElement.scrollTop = offset;
                    }
                  },
                }
              }}
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
