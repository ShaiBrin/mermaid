"use client";

import React, { useState } from 'react';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const DropdownBox = () => {
  const [selectedDropdown, setSelectedDropdown] = useState('');

//   const handleChange = (event) => {
//     const { value } = event.target;
//     setSelectedDropdown(value);
//   };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box p={2} sx={{ border: '1px solid #ccc', borderRadius: '4px' }}>
          {['option1', 'option2', 'option3', 'option4'].map((option, index) => (
            <FormControl fullWidth margin="normal" key={index} disabled={selectedDropdown !== '' && selectedDropdown !== option}>
              <InputLabel>{`Dropdown ${index + 1}`}</InputLabel>
              <Select
                value={selectedDropdown === option ? option : ''}
                label={`Dropdown ${index + 1}`}
                // onChange={handleChange}
                name={option}
              >
                <MenuItem value={option}>{`Option ${index + 1} Value`}</MenuItem>
              </Select>
            </FormControl>
          ))}
        </Box>
      </Grid>
      <Grid item xs={9}>
        {/* Other content goes here */}
      </Grid>
    </Grid>
  );
};

export default DropdownBox;
