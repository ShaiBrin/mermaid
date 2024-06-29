import React from 'react';
import { Modal, Typography, Box, Button } from '@mui/material';

interface MaidModal {
    firstname: string;
    lastname: string;
    rating: number;
    price: number;
    experience: string;
    isOpen: boolean;
    onClose: () => void;
}

const MaidModal: React.FC<MaidModal> = ({ firstname, lastname, rating, price, experience, isOpen, onClose }) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="maid-details-modal-title"
            aria-describedby="maid-details-modal-description"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: '8px' }}>
                <Typography variant="h6" id="maid-details-modal-title" gutterBottom>
                    Maid Details
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Name: {firstname} {lastname}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Rating: {rating}/5
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Price: ${price}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Experience: {experience}
                </Typography>
                <Button onClick={onClose} variant="contained" color="primary">
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default MaidModal;
