import React, { useState } from 'react';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Chip, useTheme, Button, Link } from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';

const Main = ({ onNavigate }: { onNavigate: any }) => {
  const [autocompleteOptions] = useState(['Suggestion 1', 'Suggestion 2', 'Suggestion 3']);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const theme = useTheme();

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
          {/* Button styled as a dropdown */}
          <Link href="/client">
          <Button
            variant="outlined"
            fullWidth
            onClick={() => onNavigate('/client')}
            sx={{ marginBottom: 2 }} // Additional styling
          >
            Go to Dashboard
          </Button>
          </Link>

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

export default Main;
