import React, { useState } from 'react';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, Autocomplete, TextField, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const DropdownBoxMaid = () => {
  const [selectedDropdown, setSelectedDropdown] = useState('');
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
          <FormControl fullWidth margin="normal">
            <InputLabel>Dropdown</InputLabel>
            <Select
              value={selectedDropdown}
              label="Dropdown"
              onChange={handleDropdownChange}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
              <MenuItem value="option4">Option 4</MenuItem>
            </Select>
          </FormControl>
          {selectedDropdown === 'option3' && (
            <Autocomplete
              multiple
              id="tags-outlined"
              options={autocompleteOptions}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              onChange={handleAutocompleteChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Suggestions"
                  placeholder="Type..."
                />
              )}
            />
          )}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
            {selectedOptions.map((option) => (
              <Chip
                key={option}
                label={option}
                onDelete={handleDeleteOption(option)}
                color="primary"
                sx={{ bgcolor: theme.palette.primary.light }}
              />
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DropdownBoxMaid;
