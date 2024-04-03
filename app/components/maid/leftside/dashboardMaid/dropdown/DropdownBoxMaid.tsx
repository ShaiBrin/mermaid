import React, { useState } from 'react';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Chip, useTheme } from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';

const DropdownBoxMaid = () => {
  const [selectedDropdown, setSelectedDropdown] = useState('option1'); // Assume option1 is selected by default or manage as needed
  const [autocompleteOptions] = useState(['Suggestion 1', 'Suggestion 2', 'Suggestion 3']);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const theme = useTheme();

  const handleDropdownChange = (event) => {
    setSelectedDropdown(event.target.value);
  };

  const handleAutocompleteChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };

  const handleDeleteOption = (optionToDelete) => () => {
    setSelectedOptions((options) => options.filter((option) => option !== optionToDelete));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box p={2} sx={{ border: '1px solid #ccc', borderRadius: '4px' }}>
          {/* First Dropdown */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Dropdown 1</InputLabel>
            <Select
              value={selectedDropdown}
              label="Dropdown 1"
              onChange={handleDropdownChange}
            >
              <MenuItem value="option1">Option 1 Value</MenuItem>
            </Select>
          </FormControl>

          {/* Second Dropdown with Autocomplete */}
          <Autocomplete
            multiple
            options={autocompleteOptions}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            onChange={handleAutocompleteChange}
            value={selectedOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Suggestions"
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default DropdownBoxMaid;
