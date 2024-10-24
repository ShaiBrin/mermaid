import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';

type Maid = {
  name: string;
  rating: string;
  price: string;
  experience: string;
  estimateTime: string;
};

interface MaidConfirmationCardProps {
  maid: Maid;
}

const MaidConfirmationCard: React.FC<MaidConfirmationCardProps> = ({ maid }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', mt: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Your merMaid has been confirmed!
        </Typography>
        <Box my={2}>
          <Typography variant="body1" component="p">
            <strong>Name:</strong> {maid.name}
          </Typography>
          <Typography variant="body1" component="p">
            <strong>Rating:</strong> {maid.rating}
          </Typography>
          <Typography variant="body1" component="p">
            <strong>Price:</strong> {maid.price}
          </Typography>
          <Typography variant="body1" component="p">
            <strong>Experience:</strong> {maid.experience}
          </Typography>
          <Typography variant="body1" component="p">
            <strong>Estimate Arrival Time:</strong> {maid.estimateTime}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Details
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default MaidConfirmationCard;
