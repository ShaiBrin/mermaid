import React, { useState } from 'react';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Chip, useTheme, Button, Link } from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';

const DropdownBoxMaid = () => {
  const [services] = useState(['Broom', 'Window', 'Kitchen']);
  const [locations] = useState(['Montreal', 'Laval']);

  const [selectedServices, setSelectedServicess] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');  

  const theme = useTheme();

  const handleAutocompleteChange = (event, newValue) => {
    setSelectedServicess(newValue);
  };

  const handleDeleteOption = (optionToDelete) => () => {
    setSelectedServicess((options) => options.filter((option) => option !== optionToDelete));
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box p={2} sx={{ border: '2px solid #ccc', borderRadius: '10px' }}>
        
          {/* Single-select Dropdown for locations */}
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
          {/* Second Dropdown with Autocomplete */}
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
                margin="normal" // Add margin to match the first dropdown
              />
            )}

            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index} // Add a unique key prop
                  {...getTagProps({ index })}
                  label={option}
                  onDelete={handleDeleteOption(option)}
                  color="primary"
                  sx={{ bgcolor: theme.palette.primary.light, margin: '2px' }} // Ensure tags are wrapped correctly
                />
              ))
            }
          />

          {/* Third Dropdown */}
          {/* Button styled as a dropdown */}
          <Link href="/maid/pickup">
          <Button
            variant="outlined"
            fullWidth
            // onClick={() => onNavigate('/maid/pickup')}
            sx={{ marginBottom: 2 }} // Additional styling
          >
            Get Maid Now
          </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DropdownBoxMaid;
