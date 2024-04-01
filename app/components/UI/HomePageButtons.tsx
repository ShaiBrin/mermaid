import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function HomePageButtons
() {
  return (
    
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Button variant="contained" color="primary" style={{ borderRadius: '50%', minWidth: '64px', height: '64px', margin: '0 8px' }}>
        Maid
      </Button>
      <Button variant="contained" color="secondary" style={{ borderRadius: '50%', minWidth: '64px', height: '64px', margin: '0 8px' }}>
        Customer
      </Button>
    </Box>
  );
}
