'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Chip, useTheme, Button } from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';
import { setSelectedLocation, setSelectedServices } from '@/app/store/maidSlice';
import Link from 'next/link';
import { format } from 'date-fns';

const DashboardChoose = () => {
  const { services, locations, selectedServices, selectedLocation, selectedDate, selectedTime } = useSelector((state) => state.maid);
  const dispatch = useDispatch();

  const theme = useTheme();

  const handleAutocompleteChange = (event, newValue) => {
    dispatch(setSelectedServices(newValue));
  };

  const handleDeleteOption = (optionToDelete) => () => {
    dispatch(setSelectedServices(selectedServices.filter((option) => option !== optionToDelete)));
  };

  const handleLocationChange = (event) => {
    dispatch(setSelectedLocation(event.target.value));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box p={2} sx={{ border: '2px solid #ccc', borderRadius: '10px' }}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="location-select-label">Location</InputLabel>
            <Select
              labelId="location-select-label"
              id="location-select"
              value={selectedLocation}
              label="Location"
              onChange={handleLocationChange}
            >
              {locations.map((location, index) => (
                <MenuItem key={index} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Autocomplete
            multiple
            options={services}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            onChange={handleAutocompleteChange}
            value={selectedServices}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Services"
                placeholder="Type..."
                margin="normal"
              />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  {...getTagProps({ index })}
                  label={option}
                  onDelete={handleDeleteOption(option)}
                  color="primary"
                  sx={{ bgcolor: theme.palette.primary.light, margin: '2px' }}
                />
              ))
            }
          />
          <FormControl fullWidth margin="normal">
            <InputLabel shrink>Date and Time</InputLabel>
            <Box display="flex" flexDirection="column" border="1px solid rgba(0, 0, 0, 0.23)" borderRadius="4px" padding="8px">
              <Box display="flex" justifyContent="space-between" paddingBottom="4px">
                <span>Date:</span>
                <span>{selectedDate ? format(selectedDate, 'yyyy/MM/dd') : 'N/A'}</span>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <span>Time:</span>
                <span>{selectedTime || 'N/A'}</span>
              </Box>
            </Box>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardChoose;
