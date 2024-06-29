import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Box, Grid, TextField, Chip, useTheme, Modal, Typography, Button } from '@mui/material';
import Link from 'next/link';

import Autocomplete from '@mui/lab/Autocomplete';

interface MaidDetails {
    firstname: string;
    lastname: string;
    rating: number;
    price: number;
    experience: string;
}

const DropdownPickUp: React.FC = () => {
    const [autocompleteOptions, setAutocompleteOptions] = useState<MaidDetails[]>([]);
    const [selectedOption, setSelectedOption] = useState<MaidDetails | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const fetchMaids = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/get-maids`);
                if (!res.ok) {
                    throw new Error('Failed to fetch maids');
                }
                const data = await res.json();
                if (data && data.maids && Array.isArray(data.maids.rows)) {
                    const maidDetails = data.maids.rows.map((maid: any) => ({
                        firstname: maid.firstname,
                        lastname: maid.lastname,
                        rating: maid.rating || 0, // Assuming rating is a number
                        price: maid.price || 0, // Assuming price is a number
                        experience: maid.experience || '', // Assuming experience is a string
                    }));
                    setAutocompleteOptions(maidDetails);
                } else {
                    throw new Error('Invalid maids data structure');
                }
            } catch (error) {
                console.error('Error fetching maids:', error);
            }
        };

        fetchMaids();
    }, []);

    const handleAutocompleteChange = (event: SyntheticEvent, newValue: MaidDetails | null) => {
        setSelectedOption(newValue);
        if (newValue) {
            setIsModalOpen(true); // Open modal when a maid is selected
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box p={2} sx={{ border: '1px solid #ccc', borderRadius: '4px' }}>
                    <Autocomplete
                        options={autocompleteOptions}
                        getOptionLabel={(option) => `${option.firstname} ${option.lastname}`}
                        onChange={handleAutocompleteChange}
                        value={selectedOption}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Choose Maid"
                                placeholder="Type..."
                                margin="normal"
                            />
                        )}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                // eslint-disable-next-line react/jsx-key
                                <Chip
                                    // key={option} // Add a unique key prop
                                    {...getTagProps({ index })}
                                    label={`${option.firstname} ${option.lastname}`}
                                    color="primary"
                                    sx={{ bgcolor: theme.palette.primary.light, margin: '2px' }}
                                />
                            ))
                        }
                    />
                    <Link href="/maid/pickup" passHref>
                        <Button
                            variant="outlined"
                            fullWidth sx={{ marginBottom: 2, marginTop: 2}}
                            >
                            Reserve Maid
                        </Button>
                    </Link>
                </Box>
            </Grid>
            {/* Modal for displaying maid details */}
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="maid-details-modal-title"
                aria-describedby="maid-details-modal-description"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: '8px' }}>
                    {selectedOption && (
                        <>
                            <Typography variant="h6" id="maid-details-modal-title" gutterBottom>
                                Maid Details
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Name: {selectedOption.firstname} {selectedOption.lastname}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Rating: {selectedOption.rating}/5
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Price: ${selectedOption.price}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Experience: {selectedOption.experience}
                            </Typography>
                            <Button onClick={handleCloseModal} variant="contained" color="primary">
                                Close
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </Grid>
    );
};

export default DropdownPickUp;
